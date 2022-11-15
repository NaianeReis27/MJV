import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import "dotenv/config"
import { AppError } from "../errors/appError"

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    let token = req.headers.authorization;
 
    if(!token){
        
        throw new AppError("Token não encontrado",401);
    }
    
    token = token.split(" ")[1];
  
    jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
        if(error){

            throw new AppError("Token invalido",403)

        }

        req.user = {
            isAdm: decoded.isAdm,
            id: decoded.sub
        }

        next();

    })

}

export default authMiddleware;