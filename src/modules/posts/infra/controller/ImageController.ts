import CreateImageService from '@modules/posts/services/CreateImageService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ImageController {
  async create(request: Request, response: Response): Promise<Response> {
    const { path } = request.file;
    const { id } = request.params;

    const createImageService = container.resolve(CreateImageService);
    const image = await createImageService.execute({ url: path, postId: id });

    return response.status(200).json(image);
  }
}

export default ImageController;
