import { IUserRequest, IUser, INewUser } from "../../interfaces/users"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { hashSync } from "bcrypt"
import { AppError } from "../../errors/appError"

const createUserServices = async (data:IUserRequest): Promise<IUser>=> {

    const {email,name,password} = data

    Object.values(data).forEach((ele, index) =>{
        if(!ele){
            throw new AppError(`A propriedade ${Object.keys(data)[index]} não foi definida`,400)
        }
    })

   
    const userRepository = AppDataSource.getRepository(User);

    const ExistUser = await userRepository.findOneBy({email})

    if(ExistUser){
        throw new AppError(`O email já está sendo utilizado`,400)
    }

    const passwordHashed = hashSync(password,10);

    const user = userRepository.create({
        email,
        name,
        password:passwordHashed,
    })

    await userRepository.save(user)
    const newUser: INewUser = {...user}
    delete newUser.password
    return (newUser)

}
   
export default createUserServices