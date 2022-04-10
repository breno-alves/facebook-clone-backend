import CreateImageDTO from '@modules/posts/dtos/CreateImageDTO';
import { Repository } from 'typeorm';
import Image from '../entities/Image';
import Post from '../entities/Post';
import IImageRepository from './interfaces/IImageRepository';
import DataSource from '@shared/infra/typeorm';
import AppError from '@shared/errors/AppError';

class ImagesRepository implements IImageRepository {
  private imageRepository: Repository<Image>;
  private postRepository: Repository<Post>;

  constructor() {
    this.imageRepository = DataSource.getRepository(Image);
    this.postRepository = DataSource.getRepository(Post);
  }

  async create({ postId, url }: CreateImageDTO): Promise<Image> {
    const post = await this.postRepository.findOne({
      where: { id: postId },
    });

    if (!post) throw new AppError('post not found', 404);

    const image = this.imageRepository.create({ url, postId });
    await this.save(image);

    return image;
  }

  async save(image: Image): Promise<Image> {
    return this.imageRepository.save(image);
  }
}

export default ImagesRepository;
