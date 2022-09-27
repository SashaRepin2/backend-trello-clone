import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { LabelsController } from "./labels.controller";
import { LabelsService } from "./labels.service";
import { LabelModel } from "./labels.model";

@Module({
    controllers: [LabelsController],
    providers: [LabelsService],
    imports: [SequelizeModule.forFeature([LabelModel])],
})
export class LabelsModule {}
