import { Response , Request } from "express";
import {IUserRequest} from '../../interfaces/users'
import createUserServices from '../../services/user/createUser.services';
const createUserController = async (req: Request, res: Response)=>{
  
    const {email,name,password}: IUserRequest = req.body
    const resp = await createUserServices({email,name,password})
    return res.status(201).json(resp)
  
}

export default createUserController