import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OptionRepository } from "../repositories/option.repository";
import { Repository } from "typeorm";
import { Option } from "../entities/option.entity";
import { CreateoptionDto } from "src/modules/dto/create-option-dto";
import { Question } from "../entities/question.entity";

@Injectable()
export class OptionSerices {
    constructor(@InjectRepository(Option) private optionRepository: Repository<Option>){}

    async createOption(option: CreateoptionDto, question: Question){
        const newOption = await this.optionRepository.save({
            text: option.text, isCorrect: option.isCorrect
        });
        question.options = [...question.options, newOption];
        await question.save();
        return newOption;
    }

    
    
    
}