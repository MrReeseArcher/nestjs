import {Injectable} from '@nestjs/common';
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/creaate-user.dto";
import {RoleService} from "../role/role.service";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                private roleService: RoleService) {}

    async create(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue('USER');

        await user.$set('roles', [role.id]);

        return user;
    }

    async getAll() {
        return this.userRepository.findAll({include: {all: true}});
    }

}
