import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { BoardModel } from "./boards.model";
import { CreateBoardDto } from "./dto/boards.dto";

@Injectable()
export class BoardsService {
    constructor(@InjectModel(BoardModel) private boardRepository: typeof BoardModel) {}

    async getAllBoard() {
        return await this.boardRepository.findAll();
    }

    async getBoardById(id: number) {
        const board = await this.boardRepository.findByPk(id);

        if (!board) {
            throw new HttpException("Доска не найдена", HttpStatus.BAD_REQUEST);
        }

        return board;
    }

    async createBoard(boardDto: CreateBoardDto) {
        const board = await this.boardRepository.create(boardDto);

        return board;
    }
}
