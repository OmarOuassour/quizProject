import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OptionRepository } from "../repositories/option.repository";
import { Repository } from "typeorm";
import { Option } from "../entities/option.entity";

@Injectable()
export class OptionSerices {
    constructor(@InjectRepository(Option) private optionRepository: Repository<Option>){}
    
}