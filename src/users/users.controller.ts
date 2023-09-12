import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
@Controller('auth')
export class UsersController {
    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
     console.log(body);
     
    }

    @Post('/signin')
    signin() {
        return 'Sign in';
    }

    @Get('/:id')
    getUser(@Param('id') id: string) {
        return `User ${id}`;
    }
}
