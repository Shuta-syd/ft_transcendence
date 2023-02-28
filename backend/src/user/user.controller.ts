import {
  Body,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiOperation } from '@nestjs/swagger';
import { PrismaUser, SwaggerFriends } from 'src/swagger/type';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@UseGuards(AuthGuard('jwt'))
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  @ApiOperation({
    description: 'find user by userId',
    summary: 'find user by userId',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The found the user',
    type: PrismaUser,
  })
  getUser(@Req() req: Request): User {
    console.log(req.user);
    return req.user;
  }

  @Patch('friend')
  @ApiOperation({
    description:
      'Adding a user with a friendID to the friend list of a user with userID',
    summary: 'Friend Request',
  })
  async addFriend(
    @Body() data: { userId: string; friendId: string },
  ): Promise<User> {
    return this.userService.addFriend(data.userId, data.friendId);
  }

  @Get('friend/:id')
  @ApiOperation({
    description: 'Get the friend list of the userID user',
    summary: "get user's friends",
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "The user's friends",
    type: SwaggerFriends,
  })
  async getFriend(@Param('id') userId: string): Promise<User[]> {
    return this.userService.getFriend(userId);
  }
}
