import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUser.dto";

@Controller()
export class UserController {
    constructor(
        private readonly userService: UserService, 
    ) {}
    @Post('users')
    async createUser(@Body() createUserData: CreateUserDto) {
        return await this.userService.createUser(createUserData);
    }
}

