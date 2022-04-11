import { inject, injectable } from 'tsyringe';
import CreateLikeDTO from '../dtos/CreateLikeDTO';
import ILikeRepository from '../infra/typeorm/repositories/interfaces/ILikeRepository';

@injectable()
class CreateLikeService {
  constructor(
    @inject('LikeRepository')
    private likeRepository: ILikeRepository,
  ) {}

  async execute({ postId, user }: CreateLikeDTO) {
    return this.likeRepository.create({ postId, user });
  }
}

export default CreateLikeService;
