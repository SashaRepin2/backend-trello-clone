import { BoardModel } from "@/boards/models/boards.model";
import { LabelsTasksModel } from "@/labels/models/labels-tasks.model";
import { LabelModel } from "@/labels/models/labels.model";
import { ListModel } from "@/lists/models/lists.model";
import { ApiProperty } from "@nestjs/swagger";
import {
    Column,
    DataType,
    Table,
    Model,
    BelongsTo,
    ForeignKey,
    BelongsToMany,
} from "sequelize-typescript";
import { CreateTaskDto } from "../dto/tasks.dto";

@Table({ tableName: "tasks" })
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
    @ForeignKey(() => ListModel)
    @Column({
        type: DataType.INTEGER,
    })
    listId: number;

    @BelongsTo(() => ListModel)
    list: ListModel;

    @BelongsToMany(() => LabelModel, () => LabelsTasksModel)
    labels: LabelModel[];
}
