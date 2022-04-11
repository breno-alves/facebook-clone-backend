import { inject, injectable } from 'tsyringe';
import CreateImageDTO from '../dtos/CreateImageDTO';
import IImageRepository from '../infra/typeorm/repositories/interfaces/IImageRepository';

@injectable()
class CreateImageService {
  constructor(
    @inject('ImageRepository')
    private imageRepository: IImageRepository,
  ) {}

  async execute({ postId, url }: CreateImageDTO) {
    return this.imageRepository.create({ postId, url });
  }
}

export default CreateImageService;
