import { Controller, Get, HttpStatus, Post, Body, Put, Param, Delete, Query } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateTaskDto } from "./dto/tasks.dto";
import { TaskModel } from "./models/tasks.model";
import { TasksService } from "./tasks.service";

@ApiTags("tasks")
@Controller("tasks")
export class TasksController {
    constructor(private readonly taskService: TasksService) {}

    @ApiOperation({ summary: "Создание задания" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: TaskModel,
    })
    @Post()
    create(@Body() taskDto: CreateTaskDto) {
        return this.taskService.create(taskDto);
    }

    @ApiOperation({ summary: "Получение всех заданий" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: TaskModel,
    })
    @Get()
    findAll() {
        return this.taskService.findAll();
    }

    @ApiOperation({ summary: "Получение адания" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: TaskModel,
    })
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.taskService.findOne(id);
    }

    @ApiOperation({ summary: "Обновление задания" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: TaskModel,
    })
    @Put()
    update() {
        return this.taskService.update();
    }

    @ApiOperation({ summary: "Удаление задания" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: TaskModel,
    })
    @Delete(":id")
    delete(@Param("id") taskId: string, @Query("listId") listId: number) {
        return this.taskService.delete(Number(taskId));
    }
}
