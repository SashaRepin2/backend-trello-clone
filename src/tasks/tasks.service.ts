import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateTaskDto } from "./dto/tasks.dto";
import { TaskModel } from "./tasks.model";

@Injectable()
export class TasksService {
    constructor(@InjectModel(TaskModel) private tasksRepository: typeof TaskModel) {}

    async createTask(taskDto: CreateTaskDto) {
        const task = this.tasksRepository.create(taskDto);

        return task;
    }

    async getAllTasks() {
        return await this.tasksRepository.findAll();
    }

    async getTaskById(id: string) {
        const board = await this.tasksRepository.findByPk(Number(id));

        if (!board) {
            throw new HttpException("Доска не найдена", HttpStatus.BAD_REQUEST);
        }

        return board;
    }

    async updateTask() {
        const board = await this.tasksRepository.create();

        return board;
    }

    async deleteTask(taskId: number) {
        const task = await this.tasksRepository.findByPk(taskId);

        if (!task) {
            throw new HttpException("Задача не найдена", HttpStatus.BAD_REQUEST);
        }

        this.tasksRepository.destroy({
            where: {
                id: taskId,
            },
        });

        return task;
    }
}
