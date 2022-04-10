import { inject, injectable } from 'tsyringe';
import ILikeRepository from '../infra/typeorm/repositories/interfaces/ILikeRepository';

@injectable()
class DeleteLikeService {
  constructor(
    @inject('LikeRepository')
    private likeRepository: ILikeRepository,
  ) {}

  async execute(id: string) {
    return this.likeRepository.delete(id);
  }
}

export default DeleteLikeService;
