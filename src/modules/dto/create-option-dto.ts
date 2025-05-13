import { IsNotEmpty, Length } from "class-validator";

export class CreateoptionDto {

    @IsNotEmpty()
    text: string;

    @IsNotEmpty()
    questionId: number;

    @IsNotEmpty()
    isCorrect: boolean;

}