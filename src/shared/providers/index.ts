import { container } from 'tsyringe';

import IImageRepository from '@modules/posts/infra/typeorm/repositories/interfaces/IImageRepository';
import ImageRepository from '@modules/posts/infra/typeorm/repositories/ImageRepository';

import IPostRepository from '@modules/posts/infra/typeorm/repositories/interfaces/IPostRepository';
import PostRepository from '@modules/posts/infra/typeorm/repositories/PostRepository';

import LikeRepository from '@modules/posts/infra/typeorm/repositories/LikeRepository';
import ILikeRepository from '@modules/posts/infra/typeorm/repositories/interfaces/ILikeRepository';

container.registerSingleton<IPostRepository>('PostRepository', PostRepository);

container.registerSingleton<IImageRepository>(
  'ImageRepository',
  ImageRepository,
);

container.registerSingleton<ILikeRepository>('LikeRepository', LikeRepository);
