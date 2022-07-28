import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserController } from './user/user.controller';
import { VaultController } from './vault/vault.controller';
import { VaultModule } from './vault/vault.module';

@Module({
  imports: [AuthModule, PrismaModule, VaultModule],
  controllers: [AppController, UserController, VaultController],
  providers: [AppService],
})
export class AppModule {}
