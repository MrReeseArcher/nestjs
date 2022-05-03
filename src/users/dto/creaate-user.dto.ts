import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
    readonly email: string;

    @ApiProperty({example: 'Qwerty123', description: 'Пароль'})
    readonly password: string;
}