import { TaskModel } from "@/tasks/models/tasks.model";
import { Column, DataType, Table, Model, ForeignKey } from "sequelize-typescript";
import { LabelModel } from "./labels.model";

@Table({ tableName: "labels-tasks", createdAt: false, updatedAt: false })
export class LabelsTasksModel extends Model<LabelsTasksModel> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    })
    id: number;

    @ForeignKey(() => TaskModel)
    @Column({
        type: DataType.NUMBER,
    })
    taskId: string;

    @ForeignKey(() => LabelModel)
    @Column({
        type: DataType.NUMBER,
    })
    labelId: string;
}
