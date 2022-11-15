import { Request, Response } from 'express';
import {IUserUpdate} from '../../interfaces/users'
import patchUserService from '../../services/user/patchUser.services';

const patchUserController = async (req: Request, res: Response) => {

    
        const user: IUserUpdate = req.body
        const idParams: string = req.params.id
        const updatedUser = await patchUserService(user, idParams)
        res.status(updatedUser[1] as number).json({message:updatedUser[0]})
            
    
}

export default patchUserController