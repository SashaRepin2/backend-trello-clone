import { BoardsModule } from "./boards/boards.module";
import { Module } from "@nestjs/common";

import { SequelizeModule } from "@nestjs/sequelize";
import { BoardModel } from "./boards/models/boards.model";
import { ConfigModule } from "@nestjs/config";
import { LabelsModule } from "./labels/labels.module";
import { LabelModel } from "./labels/models/labels.model";
import { ListModel } from "./lists/models/lists.model";
import { ListsModule } from "./lists/lists.module";
import { TasksModule } from "./tasks/tasks.module";
import { TaskModel } from "./tasks/models/tasks.model";
import { LabelsTasksModel } from "./labels/models/labels-tasks.model";

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
            models: [BoardModel, LabelModel, ListModel, TaskModel, LabelsTasksModel],
            autoLoadModels: true,
        }),
        BoardsModule,
        LabelsModule,
        ListsModule,
        TasksModule,
        LabelsTasksModel,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
