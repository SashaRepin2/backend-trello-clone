import { Module } from "@nestjs/common";
import { BoardsController } from "@boards/boards.controller";
import { BoardsService } from "@boards/boards.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { BoardModel } from "./boards.model";

@Module({
    controllers: [BoardsController],
    providers: [BoardsService],
    imports: [SequelizeModule.forFeature([BoardModel])],
})
export class BoardsModule {}
