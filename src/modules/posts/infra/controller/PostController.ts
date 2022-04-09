import CreatePostService from '@modules/posts/services/CreatePostService';
import IndexPostService from '@modules/posts/services/IndexPostService';
import ListPostService from '@modules/posts/services/ListPostService';
import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class PostController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { text, user } = request.body;

    const createPostService = container.resolve(CreatePostService);

    const post = await createPostService.execute({ text, user });

    return response.status(200).json(post);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    if (!id) {
      throw new AppError('missing id', 400);
    }

    const indexPostService = container.resolve(IndexPostService);
    const post = await indexPostService.execute(id);

    return response.status(200).json(post);
  }

  public async list(_: Request, response: Response): Promise<Response> {
    const listPostService = container.resolve(ListPostService);
    const posts = await listPostService.execute();

    return response.status(200).json(posts);
  }
}

export default PostController;
