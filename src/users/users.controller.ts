import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/creaate-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";

@ApiTags('Пользователи')
@Controller('api/users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.create(userDto);
    }

    @ApiOperation({summary: 'Создание пользователей'})
    @ApiResponse({status: 200})
    @Post('generate')
    generateUsers() {
        return this.userService.generateUsers();
    }

    @ApiOperation({summary: 'Список пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll() {
        return this.userService.getAll();
    }
}