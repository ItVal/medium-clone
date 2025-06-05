import { Injectable } from "@nestjs/common";

@Injectable()
export class TagService {
 findAll(){
    return ["VB, Akim, Gloire"];
 }
}