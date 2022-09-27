import { Controller, Get, Post, Body, Param, HttpStatus, Delete, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { BoardModel } from "./boards.model";
import { BoardsService } from "./boards.service";
import { CreateBoardDto } from "./dto/boards.dto";

@Controller("boards")
export class BoardsController {
    constructor(private readonly BoardService: BoardsService) {}

    @ApiOperation({ summary: "Создание доски" })
    @ApiResponse({ status: HttpStatus.OK, type: BoardModel })
    @Post()
    createBoard(@Body() boardDto: CreateBoardDto) {
        return this.BoardService.createBoard(boardDto);
    }

    @ApiOperation({ summary: "Получение всех досок" })
    @ApiResponse({ status: HttpStatus.OK, type: [BoardModel] })
    @Get()
    getBoards() {
        return this.BoardService.getAllBoard();
    }

    @ApiOperation({ summary: "Получение доски" })
    @ApiResponse({ status: HttpStatus.OK, type: BoardModel })
    @Get(":id")
    getBoard(@Param("id") id: string) {
        return this.BoardService.getBoardById(Number(id));
    }

    @ApiOperation({ summary: "Обновление доски" })
    @ApiResponse({ status: HttpStatus.OK, type: BoardModel })
    @Put(":id")
    updateBoard(@Param("id") id: string) {
        return this.BoardService.getBoardById(Number(id));
    }

    @ApiOperation({ summary: "Удаление доски" })
    @ApiResponse({ status: HttpStatus.OK, type: BoardModel })
    @Delete(":id")
    deleteBoard(@Param("id") id: string) {
        return this.BoardService.getBoardById(Number(id));
    }
}
