import CreateLikeDTO from '@modules/posts/dtos/CreateLikeDTO';
import Like from '../../entities/Likes';

export default interface IImageRepository {
  create(data: CreateLikeDTO): Promise<Like>;
  delete(id: string): Promise<void>;
}
