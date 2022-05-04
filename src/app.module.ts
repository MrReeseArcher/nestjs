import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import { RoleModule } from './role/role.module';
import {Role} from "./role/roles.model";
import {UserRoles} from "./role/user.roles.model";
import {DefaultModule} from "./default/default.module";
import {ThrottlerModule} from "@nestjs/throttler";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles],
            autoLoadModels: true,
        }),
        ThrottlerModule.forRoot({
            ttl: 60,
            limit: 1500,
        }),
        // ThrottlerModule.forRootAsync({
        //     imports: [ConfigModule],
        //     inject: [ConfigService],
        //     useFactory: (config: ConfigService) => ({
        //         ttl: config.get('THROTTLE_TTL'),
        //         limit: config.get('THROTTLE_LIMIT'),
        //     }),
        // }),
        UsersModule,
        RoleModule,
        DefaultModule,
    ]
})

export class AppModule {}