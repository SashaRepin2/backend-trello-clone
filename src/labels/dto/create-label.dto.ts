import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateLabelDto {
    @ApiProperty({
        example: "Трудная задача",
        description: "Заголовок метки",
    })
    @IsString({ message: "Название должно быть строкой" })
    @MinLength(1, { message: "Длина заголовка должна быть больше 1" })
    readonly title: string;

    // Create custom validator for check hex format

    @ApiProperty({
        example: "#fff",
        description: "Цвет метки формата Hex",
    })
    @IsString({ message: "Цвет должен быть строкой" })
    readonly hexColor: string;
}
