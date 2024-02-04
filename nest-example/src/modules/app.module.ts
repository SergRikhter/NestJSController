import { Module } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { PostMethodsController } from '../controllers/post-methods/post-methods.controller';
import { GetMethodsController } from '../controllers/get-methods/get-methods.controller';

@Module({
  imports: [],
  controllers: [PostMethodsController, GetMethodsController],
  providers: [AppService],
})
export class AppModule {}
