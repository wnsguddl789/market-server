import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { EmailModule } from 'src/email/email.module';
import { UserEntity } from './entities';

const TYPEORM_MODULE = TypeOrmModule.forFeature([UserEntity]);

@Module({
  imports: [EmailModule, TYPEORM_MODULE],
  controllers: [UserController],
  providers: [UserService],
  exports: [TYPEORM_MODULE],
})
export class UserModule {}
