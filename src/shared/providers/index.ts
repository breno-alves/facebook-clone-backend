import IPostRepository from '@modules/posts/infra/typeorm/repositories/IPostRepository';
import PostRepository from '@modules/posts/infra/typeorm/repositories/PostRepository';
import { container } from 'tsyringe';

container.registerSingleton<IPostRepository>('PostRepository', PostRepository);
