import { Response , Request } from "express";
import listPostAnimalsServices from "../../services/postAnimals/listPostAnimals.services";

const listSchedulesForIdController = async (req: Request, res: Response)=>{

   const resp =  await listPostAnimalsServices();
   return res.status(200).json(resp)
}

export default listSchedulesForIdController;