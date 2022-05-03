import {Controller, Get} from "@nestjs/common";

@Controller('/api')
export class DefaultController {
    @Get()
    test() {
        return 'Worked!';
    }
}