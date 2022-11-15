import { Response , Request } from "express";
import loginServices from "../../services/session/login.services";
import { IUserLogin } from '../../interfaces/users';

const loginController = async (req: Request, res: Response)=>{

    const {email,password}: IUserLogin = req.body
    const resp = await loginServices(email,password)
    return res.status(200).json({token: resp})
    
}

export default loginController