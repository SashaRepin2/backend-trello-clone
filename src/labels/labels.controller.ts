import { Controller, Get, Post, Body, Param, HttpStatus, Delete, Put } from "@nestjs/common";
import { LabelsService } from "./labels.service";
import { CreateLabelDto } from "./dto/labels.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { LabelModel } from "./labels.model";

@Controller("labels")
export class LabelsController {
    constructor(private readonly LabelsService: LabelsService) {}

    @ApiOperation({ summary: "Создание метки" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: LabelModel,
    })
    @Post()
    createLabel(@Body() labelDto: CreateLabelDto) {
        return this.LabelsService.createLabel(labelDto);
    }

    @ApiOperation({ summary: "Получение меток" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: [LabelModel],
    })
    @Get()
    getLabels() {
        return this.LabelsService.getAllLabels();
    }

    @ApiOperation({ summary: "Получение метки" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: LabelModel,
    })
    @Get(":id")
    getLabel(@Param("id") id: string) {
        return this.LabelsService.getLabelById(Number(id));
    }

    @ApiOperation({ summary: "Обновить метки" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: LabelModel,
    })
    @Put(":id")
    updateLabel(@Param("id") id: string) {
        return this.LabelsService.getLabelById(Number(id));
    }

    @ApiOperation({ summary: "Удаление метки" })
    @ApiResponse({
        status: HttpStatus.OK,
        type: LabelModel,
    })
    @Delete(":id")
    deleteLabel(@Param("id") id: string) {
        return this.LabelsService.getLabelById(Number(id));
    }
}
