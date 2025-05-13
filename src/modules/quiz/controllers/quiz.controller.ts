import { Controller, Get, Post, Body, HttpCode, UsePipes, ValidationPipe, Param, ParseIntPipe  } from '@nestjs/common';
import {QuizServices} from '../services/quiz.service';
import {CreateQuizDto} from '../../dto/quiz.dto';

@Controller('quiz')
export class QuizController {

    constructor (private quizServices: QuizServices){

    }

    @Get('/')

    async getAllQuiz(){
        return await this.quizServices.getAllQuiz();
    }

    @Get('/:id')
    async getQuizById(@Param('id', ParseIntPipe) id: number){
        return await this.quizServices.getQuizById(id);
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: CreateQuizDto){
        return await this.quizServices.createNewQuiz(quizData);
    }

}
