import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateListDto } from "./dto/lists.dto";
import { ListModel } from "./models/lists.model";

@Injectable()
export class ListsService {
    constructor(@InjectModel(ListModel) private listsRepository: typeof ListModel) {}

    async findAll() {
        return await this.listsRepository.findAll();
    }

    async findOne(listId: number) {
        const list = await this.listsRepository.findByPk(listId);

        if (!list) {
            throw new HttpException("Список не найден", HttpStatus.BAD_REQUEST);
        }

        return list;
    }

    async create(listDto: CreateListDto) {
        const list = await this.listsRepository.create(listDto);

        return list;
    }

    async delete(listId: number) {
        const list = await this.listsRepository.findByPk(listId);

        if (!list) {
            throw new HttpException("Список не найден", HttpStatus.BAD_REQUEST);
        }

        this.listsRepository.destroy({
            where: {
                id: list.id,
            },
        });
    }

    async update(listId) {
        const list = await this.listsRepository.findByPk(listId);

        if (!list) {
            throw new HttpException("Список не найден", HttpStatus.BAD_REQUEST);
        }
    }
}
