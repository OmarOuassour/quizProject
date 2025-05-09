import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizServices } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { Question } from './entities/question.entity'
import { QuestionController } from './controllers/question.controller';
import { QuestionServices } from './services/question.service';

@Module({
    controllers:  [QuizController, QuestionController],
    imports: [TypeOrmModule.forFeature([Quiz, Question])],
    providers: [QuizServices, QuestionServices]
})
export class QuizModule {}
