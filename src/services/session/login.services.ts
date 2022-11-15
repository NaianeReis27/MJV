import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { compareSync } from "bcrypt";
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { AppError } from "../../errors/appError";

const loginServices = async (email: string,password:string): Promise<string>=> {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({
        email: email
    });

    if(!user){
        throw new AppError(`Email ou senha inválidos`,400);
    }

    const passwordValide =  compareSync(password, user.password);

    if(!passwordValide){
        throw new AppError(`Email ou senha inválidos`,403);
    }
    
    const token = jwt.sign({
            name: user.name
        },
        process.env.SECRET_KEY as string,
        {
            expiresIn: '24h',
            subject: user.id
        }
    )

    return token

}
   
export default loginServices