import { Router } from 'express';
import PostController from '../../controller/PostController';

const postController = new PostController();

const postRouter = Router();

postRouter.post('/', postController.create);
postRouter.get('/:id', postController.index);
postRouter.get('/', postController.list);

export default postRouter;
