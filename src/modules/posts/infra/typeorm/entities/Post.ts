import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Comment from './Comment';
import Image from './Image';
import Like from './Likes';

@Entity('posts')
class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user: string;

  @Column()
  text: string;

  @OneToMany(() => Image, image => image.post, { eager: true })
  images: Image[];

  @OneToMany(() => Comment, comment => comment.post, { eager: true })
  comments: Comment[];

  @OneToMany(() => Like, like => like.post, { eager: true })
  likes: Like[];

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}

export default Post;
