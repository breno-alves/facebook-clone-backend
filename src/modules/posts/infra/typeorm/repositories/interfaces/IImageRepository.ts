import CreateImageDTO from '@modules/posts/dtos/CreateImageDTO';
import Image from '../../entities/Image';

export default interface IImageRepository {
  create(data: CreateImageDTO): Promise<Image>;
}
