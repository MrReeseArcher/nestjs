import {Body, Controller, Get, Post} from '@nestjs/common';
import {RoleService} from "./role.service";
import {CreateRoleDto} from "./dto/create.role.dto";

@Controller('api/role')
export class RoleController {
    constructor(private roleService: RoleService) {}

    @Post()
    create(@Body() roleDto: CreateRoleDto) {
        return this.roleService.create(roleDto);
    }

    @Get()
    getAll() {
        return this.roleService.getAll();
    }
}
