import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { hashSync } from "bcrypt"
import { IUserUpdate } from "../../interfaces/users"
import { AppError } from "../../errors/appError"

const patchUserService = async(data: IUserUpdate, id: string): Promise< Array<string |User | number| null>> => {

    for ( let key in data) {
        
        if(key === 'isAdm' || key ==='createdAt' || key ==='updatedAt' || key ==='id' || key ==='isActive' ){
            throw new AppError(`A propriedade ${key} não pode ser alterada`, 401)
        }
    }
    
    const userRepository = AppDataSource.getRepository(User)

    const ExistUser = await userRepository.findOneBy({id})

    if(!ExistUser){
        throw new AppError('Usuário não encontrado', 404)
    }

    await userRepository.update(
        id as string,
        {
            name: data.name ? data.name : ExistUser.name,
            email: data.email ? data.email : ExistUser.email,
            password: data.password ? hashSync(data.password, 10) : ExistUser.password
        }
    )

    const user = await userRepository.findOneBy({id})

    return [user, 200]

}

export default patchUserService