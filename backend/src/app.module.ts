import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { MatchModule } from './match/match.module';
import { AuthModule } from './auth/auth.module';
import { GameGateway } from './game/game.gateway';
import { GameModule } from './game/game.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ChatModule,
    PrismaModule,
    UserModule,
    MatchModule,
    AuthModule,
    GameGateway,
    GameModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
