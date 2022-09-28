import { BoardModel } from "@/boards/models/boards.model";
import { TaskModel } from "@/tasks/models/tasks.model";
import { ApiProperty } from "@nestjs/swagger";
import {
    Column,
    DataType,
    Table,
    Model,
    BelongsTo,
    ForeignKey,
    HasMany,
} from "sequelize-typescript";
import { CreateListDto } from "../dto/lists.dto";

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
        allowNull: false,
    })
    boardId: number;

    @BelongsTo(() => BoardModel)
    board: BoardModel;

    @HasMany(() => TaskModel)
    tasks: TaskModel[];
}
