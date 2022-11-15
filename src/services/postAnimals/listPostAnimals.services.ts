import AppDataSource from "../../data-source";
import { PostAnimals } from "../../entities/PostAnimals.entity";

const listPostAnimalsServices = async () => {
  const postAnimalsRepository = AppDataSource.getRepository(PostAnimals);

  const posts = await postAnimalsRepository.find();

  return { posts: posts };
};

export default listPostAnimalsServices;
