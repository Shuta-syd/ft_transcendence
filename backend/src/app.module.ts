import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { MatchModule } from './match/match.module';

@Module({
  imports: [ChatModule, PrismaModule, UserModule, MatchModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
