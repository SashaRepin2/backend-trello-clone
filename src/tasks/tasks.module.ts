import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { TasksController } from "./tasks.controller";
import { TaskModel } from "./tasks.model";
import { TasksService } from "./tasks.service";

@Module({
    controllers: [TasksController],
    providers: [TasksService],
    imports: [SequelizeModule.forFeature([TaskModel])],
})
export class ListsModule {}
