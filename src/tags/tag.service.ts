import { Injectable } from "@nestjs/common";
import { promises } from "dns";
import { TagEntity } from "../entities/tag.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class TagService {
    constructor(
        @InjectRepository(TagEntity)
        private readonly tagRepository: Repository<TagEntity>,  
    ) {}
 async findAll(): Promise<TagEntity[]> {
  return await this.tagRepository.find();
 }
}