import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tags/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './ormConfig';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
