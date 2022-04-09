import postRouter from '@modules/posts/infra/http/routes';

import { Router } from 'express';

const routes = Router();

routes.use('/posts', postRouter);

export default routes;
