import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { LabelsController } from "./labels.controller";
import { LabelsService } from "./labels.service";
import { LabelsTasksModel } from "./models/labels-tasks.model";
import { LabelModel } from "./models/labels.model";

@Module({
    controllers: [LabelsController],
    providers: [LabelsService],
    imports: [SequelizeModule.forFeature([LabelModel, LabelsTasksModel])],
})
export class LabelsModule {}
