import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TasksModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost/nestdb'),
    AuthModule,
  ],
})
export class AppModule {}
