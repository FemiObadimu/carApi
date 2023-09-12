import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
@Controller('auth')
export class UsersController {
    constructor(private usersService: UsersService) {}



    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
     this.usersService.create(body.email, body.password);
     
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
