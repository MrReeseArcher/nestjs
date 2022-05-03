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

    async generateUsers() {
        // for () {
        //     let user = new CreateUserDto(
        //         this.generateRandomString(10),
        //
        //     );
        //     this.userRepository.create(user);
        // }
    }

    async getAll() {
        return this.userRepository.findAll({include: {all: true}});
    }

    generateRandomString(myLength) {
        const chars = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
        const randomArray = Array.from(
            { length: myLength },
            (v, k) => chars[Math.floor(Math.random() * chars.length)]
        );

        return randomArray.join("");
    };
}
