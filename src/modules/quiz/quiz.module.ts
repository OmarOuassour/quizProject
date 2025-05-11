import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizServices } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { Option } from './entities/option.entity';
import { Question } from './entities/question.entity'
import { QuestionController } from './controllers/question.controller';
import { QuestionServices } from './services/question.service';
import { OptionController } from './controllers/option.controller';
import { OptionSerices } from './services/option.service';

@Module({
    controllers:  [QuizController, QuestionController, OptionController],
    imports: [TypeOrmModule.forFeature([Quiz, Question, Option])],
    providers: [QuizServices, QuestionServices, OptionSerices]
})
export class QuizModule {}
