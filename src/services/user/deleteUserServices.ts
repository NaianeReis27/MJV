import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const deleteUserService = async(id: string): Promise<Array<string|number|User| null>> => {
    
    const userRepository = AppDataSource.getRepository(User)

    const ExistUser = await userRepository.findOneBy({id})

    if(!ExistUser){
      throw new AppError(`usuário não encontrado`,404)
    }
    
      const user = await userRepository.findOneBy({
        id,
      });
    
      return [user, 204]
}

export default deleteUserService