import { Module } from '@nestjs/common';
import { PostService } from './posts.service';

@Module({
    controllers: [],
    providers: [PostService]
})
export class PostsModule {}
