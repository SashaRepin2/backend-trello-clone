import { ListModel } from "@/lists/lists.model";
import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model, HasMany } from "sequelize-typescript";
import { CreateBoardDto } from "./dto/boards.dto";

@Table({ tableName: "boards" })
export class BoardModel extends Model<BoardModel, CreateBoardDto> {
    @ApiProperty({
        example: "12",
        description: "Уникальный идентификатор",
    })
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    })
    id: number;

    @ApiProperty({
        example: "Задачи",
        description: "Название доски",
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @ApiProperty({
        example: "Доска содержит задачи на сегодня",
        description: "Описание доски",
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @HasMany(() => ListModel)
    lists: ListModel[];
}
