import { Router } from 'express';
import PostController from '../../controller/PostController';
import multer from 'multer';
import multerConfig from '@shared/infra/multer/config';
import ImageController from '../../controller/ImageController';

const imageController = new ImageController();
const postController = new PostController();

const postRouter = Router();

postRouter.post('/', postController.create);
postRouter.get('/:id', postController.index);
postRouter.get('/', postController.list);

postRouter.post(
  '/:id/images',
  multer(multerConfig).single('file'),
  imageController.create,
);

export default postRouter;
