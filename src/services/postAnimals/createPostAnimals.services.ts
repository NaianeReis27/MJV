import AppDataSource from "../../data-source";
import { PostAnimals } from "../../entities/PostAnimals.entity";
import { User } from "../../entities/user.entity";
import { IpostAnimalsData } from "../../interfaces/postAnimals";
import { AppError } from "../../errors/appError";

const createPostAnimalsServices = async (data: IpostAnimalsData, id: string) => {
  const { title, image, description} = data;

  const userRepository = AppDataSource.getRepository(User);
  const postAnimalsRepository = AppDataSource.getRepository(PostAnimals);
 
  
  const postAnimals = await postAnimalsRepository.find();
  const users = await userRepository.find();

  const user = users.find((elem) => elem.id === id);
 

  const postExists = postAnimals.find(
    (elem) => elem.title === title && elem.image === image
  );

  if (postExists) {
    throw new AppError(`post já criado`, 400);
  }
  const userWithoutPassword = {...user}
  delete userWithoutPassword.password;

  const newPost = await postAnimalsRepository.save({
    title,
    description,
    image,
    userData: userWithoutPassword
  });

  return newPost
};

export default createPostAnimalsServices;
