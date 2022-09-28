import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { BoardModel } from "./models/boards.model";
import { CreateBoardDto } from "./dto/create-board.dto";

@Injectable()
export class BoardsService {
    constructor(@InjectModel(BoardModel) private boardsRepository: typeof BoardModel) {}

    async create(boardDto: CreateBoardDto) {
        const board = await this.boardsRepository.create(boardDto);

        return board;
    }

    async findAll(limit: number, page: number) {
        const offset = (limit ? limit : 1) * (page ? page - 1 : 0);

        const result = await this.boardsRepository.findAndCountAll({ limit, offset });

        return { boards: result.rows, count: result.count };
    }

    async findOne(id: number) {
        const board = await this.boardsRepository.findByPk(id);

        if (!board) {
            throw new HttpException("Доска не найдена", HttpStatus.BAD_REQUEST);
        }

        return board;
    }

    async update(id: number, boardDto: CreateBoardDto) {
        const board = await this.boardsRepository.findByPk(id);

        if (!board) {
            throw new HttpException("Доска не найдена", HttpStatus.BAD_REQUEST);
        }

        await this.boardsRepository.update(boardDto, {
            where: {
                id: board.id,
            },
        });
    }

    async delete(id: number) {
        const board = await this.boardsRepository.findByPk(id);

        console.log(board);

        if (!board) {
            throw new HttpException("Доска не найдена", HttpStatus.BAD_REQUEST);
        }

        this.boardsRepository.destroy({
            where: {
                id: board.id,
            },
        });

        return board;
    }
}
