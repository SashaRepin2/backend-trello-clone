import { Controller, Get, HttpStatus, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CreateListDto } from "./dto/lists.dto";
import { ListModel } from "./lists.model";
import { ListsService } from "./lists.service";

@Controller("lists")
export class ListsController {
    constructor(private readonly ListsService: ListsService) {}

    @ApiOperation({ summary: "Создание списка" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: ListModel,
    })
    @ApiOperation({ summary: "Создание списка" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: ListModel,
    })
    @Post("create")
    createList(@Body() listDto: CreateListDto) {
        return this.ListsService.createList(listDto);
    }

    @ApiOperation({ summary: "Создание списка" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: ListModel,
    })
    @Get()
    getLists() {
        return this.ListsService.getAllLists();
    }

    @ApiOperation({ summary: "Создание списка" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: ListModel,
    })
    @Get(":id")
    getList(@Param("id") id: string) {
        return this.ListsService.getListById(id);
    }

    @ApiOperation({ summary: "Создание списка" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: ListModel,
    })
    @Put()
    updateList(@Param("id") id: string) {
        return this.ListsService.getListById(id);
    }

    @ApiOperation({ summary: "Удаление списка" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: ListModel,
    })
    @Delete(":boardId/:listId")
    deleteList(@Param("listId") listId: string, @Param("boardId") boardId: string) {
        return this.ListsService.getListById(listId);
    }
}
