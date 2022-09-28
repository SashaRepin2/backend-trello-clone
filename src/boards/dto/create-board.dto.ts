import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateBoardDto {
    @ApiProperty({
        example: "Доска 1",
        description: "Заголовок доски",
    })
    @IsString({ message: "Название должно быть строкой" })
    @MinLength(1, { message: "Длина заголовка должна быть больше 1" })
    readonly title: string;

    @ApiProperty({
        example: "Задачи по работе",
        description: "Описание доски",
    })
    @IsString({ message: "Название должно быть строкой" })
    readonly description: string;
}
