import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateListDto } from "./dto/lists.dto";
import { ListModel } from "./lists.model";

@Injectable()
export class ListsService {
    constructor(@InjectModel(ListModel) private listsRepository: typeof ListModel) {}

    async getAllLists() {
        return await this.listsRepository.findAll();
    }

    async getListById(id: string) {
        const board = await this.listsRepository.findByPk(Number(id));

        if (!board) {
            throw new HttpException("Доска не найдена", HttpStatus.BAD_REQUEST);
        }

        return board;
    }

    async createList(listDto: CreateListDto) {
        const board = await this.listsRepository.create(listDto);

        return board;
    }
}
