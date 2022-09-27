import { ApiProperty } from "@nestjs/swagger";

export class CreateListDto {
    @ApiProperty({
        example: "Список 1",
        description: "Заголовок списка",
    })
    title: string;

    @ApiProperty({
        example: "Незавершенные дела",
        description: "Описание списка",
    })
    description: string;

    @ApiProperty({
        example: "12",
        description: "Уникальный идентификатор доски",
    })
    boardId: number;
}
