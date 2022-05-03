import {DefaultController} from "./default.controller";
import {Module} from "@nestjs/common";


@Module({
  controllers: [DefaultController],
  providers: [],
  imports: []
})
export class DefaultModule {}
