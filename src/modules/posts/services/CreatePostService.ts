import { inject, injectable } from 'tsyringe';
import CreatePostDTO from '../dtos/CreatePostDTO';
import IPostRepository from '../infra/typeorm/repositories/IPostRepository';

@injectable()
class CreatePostService {
  constructor(
    @inject('PostRepository')
    private postRepository: IPostRepository,
  ) {}

  public async execute(data: CreatePostDTO) {
    const { text, user } = data;

    const post = await this.postRepository.create({ text, user });

    return post;
  }
}

export default CreatePostService;
