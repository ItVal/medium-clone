import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    async findAll(): Promise<any> {
        return "create a User using the UserService";
    }
}
