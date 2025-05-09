import { Injectable, Get } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Question } from "../entities/question.entity";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "../../dto/create-question.dto";
import { Quiz } from "../entities/quiz.entity";

@Injectable()
export class QuestionServices {

    constructor(@InjectRepository(Question) private questionRepository: Repository<Question>){}

    async createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question>{

        const NewQuestion =  await this.questionRepository.save(
            {question: question.question}
        );
        quiz.questions = [NewQuestion, ... quiz.questions];
        await quiz.save();
        return NewQuestion;
    }

}
