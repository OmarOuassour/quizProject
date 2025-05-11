import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { OptionSerices } from "../services/option.service";
import { QuestionServices } from "../services/question.service";
import { CreateoptionDto } from "src/modules/dto/create-option-dto";

@Controller('question/option')
export class OptionController {
    constructor(private optionService: OptionSerices, private questionService: QuestionServices){}

    @Post('')
    @UsePipes(ValidationPipe)
    saveOptionToQuestion(@Body() createOption: CreateoptionDto){
        return createOption;
    }

}