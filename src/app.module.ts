import { BoardsModule } from "./boards/boards.module";
import { Module } from "@nestjs/common";

import { SequelizeModule } from "@nestjs/sequelize";
import { BoardModel } from "./boards/boards.model";
import { ConfigModule } from "@nestjs/config";
import { LabelsModule } from "./labels/labels.module";
import { LabelModel } from "./labels/labels.model";
import { ListModel } from "./lists/lists.model";
import { ListsModule } from "./lists/lists.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        SequelizeModule.forRoot({
            dialect: "postgres",
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            models: [BoardModel, LabelModel, ListModel],
            autoLoadModels: true,
        }),
        BoardsModule,
        LabelsModule,
        ListsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
