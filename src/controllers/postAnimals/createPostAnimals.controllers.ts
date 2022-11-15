import { Response , Request } from "express";
import createPostAnimalsServices from "../../services/postAnimals/createPostAnimals.services";


const createPostAnimalsController = async (req: Request, res: Response)=>{

   const data = req.body;
   const id = req.user.id;
   const resp =  await createPostAnimalsServices(data, id);
   return res.status(201).json({message:resp})

}

export default createPostAnimalsController;