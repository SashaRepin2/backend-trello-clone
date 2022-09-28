import { TaskModel } from "@/tasks/models/tasks.model";
import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model, BelongsToMany } from "sequelize-typescript";
import { CreateLabelDto } from "../dto/create-label.dto";
import { LabelsTasksModel } from "./labels-tasks.model";

@Table({ tableName: "labels" })
export class LabelModel extends Model<LabelModel, CreateLabelDto> {
    @ApiProperty({
        example: "1",
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
        example: "Метка 1",
        description: "Заголовок метки",
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @ApiProperty({
        example: "#fff",
        description: "Цвет метки в формате HEX",
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    hexColor: string;

    @BelongsToMany(() => TaskModel, () => LabelsTasksModel)
    tasks: TaskModel[];
}
