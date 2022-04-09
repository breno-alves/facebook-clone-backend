import { inject, injectable } from 'tsyringe';
import IPostRepository from '../infra/typeorm/repositories/IPostRepository';

@injectable()
class ListPostService {
  constructor(
    @inject('PostRepository')
    private postRepository: IPostRepository,
  ) {}

  public async execute() {
    return this.postRepository.list();
  }
}

export default ListPostService;
