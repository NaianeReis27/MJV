import { Response , Request } from "express";
import listUsersService from "../../services/user/listUsers.services";
const listUsersController = async (req: Request, res: Response)=>{
 
    const users = await listUsersService()
    return res.json(users)
  
  
}

export default listUsersController