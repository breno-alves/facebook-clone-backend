import { inject, injectable } from 'tsyringe';
import IPostRepository from '../infra/typeorm/repositories/IPostRepository';

@injectable()
class IndexPostService {
  constructor(
    @inject('PostRepository')
    private postRepository: IPostRepository,
  ) {}

  public async execute(id: string) {
    return this.postRepository.index(id);
  }
}

export default IndexPostService;
