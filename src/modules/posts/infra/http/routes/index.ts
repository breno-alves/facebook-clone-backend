import { Router } from 'express';
import PostController from '../../controller/PostController';
import multer from 'multer';
import multerConfig from '@shared/infra/multer/config';
import ImageController from '../../controller/ImageController';
import LikeController from '../../controller/LikeController';

const imageController = new ImageController();
const postController = new PostController();
const likeController = new LikeController();

const postRouter = Router();

// POST
postRouter.post('/', postController.create);
postRouter.get('/:id', postController.index);
postRouter.get('/', postController.list);

// IMAGE
postRouter.post(
  '/:id/images',
  multer(multerConfig).single('file'),
  imageController.create,
);

// LIKE

postRouter.post('/:id/likes', likeController.create);
postRouter.delete('/:postId/likes/:likeId', likeController.delete);

export default postRouter;
