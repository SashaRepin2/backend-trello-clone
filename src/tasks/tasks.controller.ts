import { Controller, Get, HttpStatus, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CreateTaskDto } from "./dto/tasks.dto";
import { TaskModel } from "./tasks.model";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
    constructor(private readonly taskService: TasksService) {}

    @ApiOperation({ summary: "Создание задания" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: TaskModel,
    })
    @Post("create")
    createTask(@Body() taskDto: CreateTaskDto) {
        return this.taskService.createTask(taskDto);
    }

    @ApiOperation({ summary: "Создание задния" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: TaskModel,
    })
    @Get()
    getTasks() {
        return this.taskService.getAllTasks();
    }

    @ApiOperation({ summary: "Создание задания" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: TaskModel,
    })
    @Get(":id")
    getTask(@Param("id") id: string) {
        return this.taskService.getTaskById(id);
    }

    @ApiOperation({ summary: "Создание задания" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: TaskModel,
    })
    @Put()
    updateTask() {
        return this.taskService.updateTask();
    }

    @ApiOperation({ summary: "Удаление задания" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: TaskModel,
    })
    @Delete(":listId/:taskId")
    deleteTask(@Param("taskId") taksId: string, @Param("listId") listId: string) {
        return this.taskService.deleteTask(Number(taksId));
    }
}
