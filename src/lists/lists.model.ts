import { BoardModel } from "@/boards/boards.model";
import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model, BelongsTo, ForeignKey } from "sequelize-typescript";
import { CreateListDto } from "./dto/lists.dto";

@Table({ tableName: "lists" })
export class ListModel extends Model<ListModel, CreateListDto> {
    @ApiProperty({
        example: "1",
        description: "Уникальный идентификатор списка",
    })
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    })
    id: number;

    @ApiProperty({
        example: "Список 1",
        description: "Заголовок списка",
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @ApiProperty({
        example: "Список для заверешенных задач",
        description: "Описание списка",
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @ApiProperty({
        example: "12",
        description: "Уникальный идентификатор доски",
    })
    @ForeignKey(() => BoardModel)
    @Column({
        type: DataType.INTEGER,
    })
    boardId: number;

    @BelongsTo(() => BoardModel)
    board: BoardModel;
}
