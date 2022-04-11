import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateLikeService from '@modules/posts/services/CreateLikeService';
import AppError from '@shared/errors/AppError';
import DeleteLikeService from '@modules/posts/services/DeleteLikeService';

class LikeController {
  async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { user } = request.body;

    if (!id || !user) throw new AppError('missing params', 400);

    const createImageService = container.resolve(CreateLikeService);
    const like = await createImageService.execute({
      postId: id,
      user: user,
    });

    return response.status(200).json(like);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { likeId } = request.params;

    const deleteLikeService = container.resolve(DeleteLikeService);
    await deleteLikeService.execute(likeId);

    return response.status(200).json({ ok: true });
  }
}

export default LikeController;
