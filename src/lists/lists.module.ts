import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ListsController } from "./lists.controller";
import { ListModel } from "./lists.model";
import { ListsService } from "./lists.service";

@Module({
    controllers: [ListsController],
    providers: [ListsService],
    imports: [SequelizeModule.forFeature([ListModel])],
})
export class ListsModule {}
