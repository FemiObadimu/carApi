import { Controller, Post, Get, Param, Body, Patch, Query } from '@nestjs/common';
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
    findUser(@Param('id') id: string) {
        return this.usersService.findOne(parseInt(id));
    }


}
