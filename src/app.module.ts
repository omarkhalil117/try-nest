import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TasksModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost/nestdb'),
    AuthModule,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
