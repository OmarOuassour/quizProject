import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "../../dto/create-question.dto";
import { QuestionServices } from "../services/question.service";
import { QuizServices } from "../services/quiz.service";
import { Question } from "../entities/question.entity";

@Controller('question')
export class QuestionController{
    constructor(private questionService: QuestionServices, private quizService: QuizServices){}
    @Post('')
    @UsePipes(ValidationPipe)
    
    async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question>{
        const quiz = await this.quizService.getQuizById(question.quizId);
        return await this.questionService.createQuestion(question, quiz!);
    }


}