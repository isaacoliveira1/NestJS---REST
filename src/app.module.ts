import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://isaacoliveira:HKVnUlscj2Sy3ipa@cluster0.a3szx.mongodb.net/backenddb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
