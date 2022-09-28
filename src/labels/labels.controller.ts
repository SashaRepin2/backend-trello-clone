import { Controller, Get, Post, Body, Param, HttpStatus, Delete, Put } from "@nestjs/common";

import { CreateLabelDto } from "./dto/create-label.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { LabelModel } from "./models/labels.model";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LabelsService } from "./labels.service";

@ApiTags("labels")
@Controller("labels")
export class LabelsController {
    constructor(private readonly LabelsService: LabelsService) {}

    @ApiOperation({ summary: "Создание метки" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: LabelModel,
    })
    @Post()
    create(@Body() labelDto: CreateLabelDto) {
        return this.LabelsService.create(labelDto);
    }

    @ApiOperation({ summary: "Получение меток" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: [LabelModel],
    })
    @Get()
    findAll() {
        return this.LabelsService.findAll();
    }

    @ApiOperation({ summary: "Получение метки" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: LabelModel,
    })
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.LabelsService.findOne(Number(id));
    }

    @ApiOperation({ summary: "Обновить метку" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: LabelModel,
    })
    @Put(":id")
    update(@Param("id") id: string, @Body() labelDto: CreateLabelDto) {
        return this.LabelsService.update(Number(id), labelDto);
    }

    @ApiOperation({ summary: "Удаление метки" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: LabelModel,
    })
    @Delete(":id")
    delete(@Param("id") id: string) {
        return this.LabelsService.delete(Number(id));
    }
}
