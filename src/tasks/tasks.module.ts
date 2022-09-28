import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { TasksController } from "./tasks.controller";
import { TaskModel } from "./models/tasks.model";
import { TasksService } from "./tasks.service";
import { LabelsTasksModel } from "@/labels/models/labels-tasks.model";

@Module({
    controllers: [TasksController],
    providers: [TasksService],
    imports: [SequelizeModule.forFeature([TaskModel, LabelsTasksModel])],
})
export class TasksModule {}
