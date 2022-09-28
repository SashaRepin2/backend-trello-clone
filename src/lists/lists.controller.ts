import { Controller, Get, HttpStatus, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateListDto } from "./dto/lists.dto";
import { ListModel } from "./models/lists.model";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ListsService } from "./lists.service";

@ApiTags("lists")
@Controller("lists")
export class ListsController {
    constructor(private readonly ListsService: ListsService) {}

    @ApiOperation({ summary: "Создание списка" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: ListModel,
    })
    @Post()
    createList(@Body() listDto: CreateListDto) {
        return this.ListsService.create(listDto);
    }

    @ApiOperation({ summary: "Получение всех списков" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: ListModel,
    })
    @Get()
    findAll() {
        return this.ListsService.findAll();
    }

    @ApiOperation({ summary: "Получение списка" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: ListModel,
    })
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.ListsService.findOne(Number(id));
    }

    @ApiOperation({ summary: "Обновление списка" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: ListModel,
    })
    @Put(":id")
    update(@Param("id") listId: string) {
        return this.ListsService.update(Number(listId));
    }

    @ApiOperation({ summary: "Удаление списка" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: ListModel,
    })
    @Delete(":id")
    delete(@Param("id") listId: string) {
        return this.ListsService.delete(Number(listId));
    }
}
