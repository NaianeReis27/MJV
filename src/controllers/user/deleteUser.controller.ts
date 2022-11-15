import { Request, Response } from 'express';
import deleteUserService from '../../services/user/deleteUserServices';

const deleteUserController = async (req: Request, res: Response) => {

        const idParams: string = req.params.id
        const respDelete = await deleteUserService(idParams)
        res.status(respDelete[1] as number).json({message:respDelete[0]})
    
}

export default deleteUserController