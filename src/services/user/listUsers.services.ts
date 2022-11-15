import { IUserRequest, IUser, INewUser } from "../../interfaces/users"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"


const listUsersService = async (): Promise<Array<IUser>>=> {
    
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find()
    const newUsers: Array<INewUser> = [...users]
    newUsers.forEach(ele => delete ele.password)
    return (users)

}
   
export default listUsersService