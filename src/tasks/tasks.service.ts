import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateTaskDto } from "./dto/tasks.dto";
import { TaskModel } from "./models/tasks.model";

@Injectable()
export class TasksService {
    constructor(@InjectModel(TaskModel) private tasksRepository: typeof TaskModel) {}

    async create(taskDto: CreateTaskDto) {
        const task = this.tasksRepository.create(taskDto);

        return task;
    }

    async findAll() {
        return await this.tasksRepository.findAll();
    }

    async findOne(id: string) {
        const board = await this.tasksRepository.findByPk(Number(id));

        if (!board) {
            throw new HttpException("Доска не найдена", HttpStatus.BAD_REQUEST);
        }

        return board;
    }

    async update() {
        const board = await this.tasksRepository.create();

        return board;
    }

    async delete(taskId: number) {
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
