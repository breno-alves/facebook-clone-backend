import CreateLikeDTO from '@modules/posts/dtos/CreateLikeDTO';
import Like from '../entities/Likes';
import ILikeRepository from './interfaces/ILikeRepository';
import DataSource from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import Post from '../entities/Post';
import AppError from '@shared/errors/AppError';

class LikeRepository implements ILikeRepository {
  private postRepository: Repository<Post>;
  private likeRepository: Repository<Like>;

  constructor() {
    this.postRepository = DataSource.getRepository(Post);
    this.likeRepository = DataSource.getRepository(Like);
  }

  async create({ postId, user }: CreateLikeDTO): Promise<Like> {
    const findPost = await this.postRepository.findOne({
      where: { id: postId },
    });

    if (!findPost) {
      throw new AppError('post not found', 404);
    }

    const like = this.likeRepository.create({ postId, user });
    await this.save(like);

    return like;
  }

  async delete(id: string): Promise<void> {
    const findLike = await this.likeRepository.findOne({ where: { id } });

    if (!findLike) {
      throw new AppError('like not found', 404);
    }

    await this.likeRepository.remove(findLike);
  }

  async save(like: Like): Promise<Like> {
    return this.likeRepository.save(like);
  }
}

export default LikeRepository;
