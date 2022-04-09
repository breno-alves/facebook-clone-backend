import { Repository } from 'typeorm';
import DataSource from '@shared/infra/typeorm/index';
import Post from '../entities/Post';
import CreatePostDTO from '@modules/posts/dtos/CreatePostDTO';
import IPostRepository from './IPostRepository';

class PostRepository implements IPostRepository {
  private postRepository: Repository<Post>;

  constructor() {
    this.postRepository = DataSource.getRepository(Post);
  }

  public async create(data: CreatePostDTO) {
    const post = this.postRepository.create(data);
    await this.save(post);
    return post;
  }

  public async index(id: string): Promise<Post> {
    return this.postRepository.findOne({ where: { id } });
  }

  public async list(limit: number = 25, page: number = 0): Promise<Post[]> {
    return this.postRepository.find({
      skip: page,
      take: limit,
    });
  }

  public async save(post: Post): Promise<Post> {
    return this.postRepository.save(post);
  }
}

export default PostRepository;
