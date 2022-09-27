import { ApiProperty } from "@nestjs/swagger";

export class CreateBoardDto {
    @ApiProperty({
        example: "Доска 1",
        description: "Заголовок доски",
    })
    title: string;

    @ApiProperty({
        example: "Задачи по работе",
        description: "Описание доски",
    })
    description: string;
}
