import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    HttpStatus,
    Delete,
    Put,
    Query,
    UsePipes,
} from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { BoardModel } from "./models/boards.model";
import { BoardsService } from "./boards.service";
import { CreateBoardDto } from "./dto/create-board.dto";
import { ValidationPipe } from "@/pipes/validation.pipe";

@ApiTags("boards")
@UsePipes(ValidationPipe)
@Controller("boards")
export class BoardsController {
    constructor(private readonly BoardService: BoardsService) {}

    @ApiOperation({ summary: "Создание доски" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: BoardModel,
    })
    @Post()
    create(@Body() boardDto: CreateBoardDto) {
        return this.BoardService.create(boardDto);
    }

    @ApiOperation({ summary: "Получение всех досок" })
    @ApiQuery({
        name: "limit",
        description: "Количество возвращаемых досок",
        example: 5,
        required: false,
    })
    @ApiQuery({
        name: "page",
        description: "Номер страницы",
        example: 1,
        required: false,
    })
    @ApiResponse({
        status: HttpStatus.OK,
        type: [BoardModel],
    })
    @Get()
    findAll(@Query("limit") limit: number, @Query("page") page: number) {
        return this.BoardService.findAll(limit, page);
    }

    @ApiOperation({ summary: "Получение доски" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: BoardModel,
    })
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.BoardService.findOne(Number(id));
    }

    @ApiOperation({ summary: "Обновление доски" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: BoardModel,
    })
    @Put(":id")
    update(@Param("id") id: string, @Body() boardDto: CreateBoardDto) {
        return this.BoardService.update(Number(id), boardDto);
    }

    @ApiOperation({ summary: "Удаление доски" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: BoardModel,
    })
    @Delete(":id")
    delete(@Param("id") id: string) {
        return this.BoardService.delete(Number(id));
    }
}
