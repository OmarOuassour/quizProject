import { Injectable, Get } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "../../dto/quiz.dto";
import { Quiz } from "../entities/quiz.entity";
import { Repository } from "typeorm";

@Injectable()
export class QuizServices {

    constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz>){}

    @Get('/')
    getAllQuiz(){
        return [1,2,3,'Hello from service']
    }

    async getQuizById(id: number){
        return await this.quizRepository.findOne({ where: { id }, relations: ['questions']});

    }

    async createNewQuiz(quiz: CreateQuizDto){
        return await this.quizRepository.save(quiz);
    }

}