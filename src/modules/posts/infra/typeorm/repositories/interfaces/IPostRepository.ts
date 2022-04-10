import CreatePostDTO from '@modules/posts/dtos/CreatePostDTO';
import Post from '../../entities/Post';

export default interface IPostRepository {
  create(data: CreatePostDTO): Promise<Post>;
  index(id: string): Promise<Post | null>;
  list(): Promise<Post[]>;
}
