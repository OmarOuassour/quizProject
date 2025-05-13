import { Injectable, Get } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "../../dto/quiz.dto";
import { Quiz } from "../entities/quiz.entity";
import { Repository } from "typeorm";

@Injectable()
export class QuizServices {

    constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz>){}

    @Get('/')
    async getAllQuiz(){
        return await this.quizRepository.createQueryBuilder('q')
        .leftJoinAndSelect('q.questions', 'qt')
        .leftJoinAndSelect('qt.options', "o")
        .getMany();
    }

    async getQuizById(id: number){
        return await this.quizRepository.findOne({ where: { id }, relations: ['questions', 'questions.options']});

    }

    async createNewQuiz(quiz: CreateQuizDto){
        return await this.quizRepository.save(quiz);
    }

}