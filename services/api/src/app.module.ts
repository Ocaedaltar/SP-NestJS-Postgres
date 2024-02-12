import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './users/users.service';
import { PostService } from './posts/posts.service';

@Module({
    imports: [
        ConfigModule.forRoot({
			isGlobal: true,
		}),
        PrismaModule
    ],
    controllers: [AppController],
    providers: [AppService, UserService, PostService],
})
export class AppModule {}
