import { BoardModel } from "@/boards/boards.model";
import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model, BelongsTo, ForeignKey } from "sequelize-typescript";
import { CreateTaskDto } from "./dto/tasks.dto";

@Table({ tableName: "lists" })
export class TaskModel extends Model<TaskModel, CreateTaskDto> {
    @ApiProperty({
        example: "1",
        description: "Уникальный идентификатор задачи",
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
        description: "Заголовок задачи",
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @ApiProperty({
        example: "12",
        description: "Уникальный идентификатор задания",
    })
    @ForeignKey(() => BoardModel)
    @Column({
        type: DataType.INTEGER,
    })
    listId: number;

    @BelongsTo(() => BoardModel)
    board: BoardModel;
}
