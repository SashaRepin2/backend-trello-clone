import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty({
        example: "Список 1",
        description: "Заголовок задания",
    })
    title: string;

    @ApiProperty({
        example: "12",
        description: "Уникальный идентификатор списка",
    })
    listId: number;
}
