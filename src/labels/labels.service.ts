import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateLabelDto } from "./dto/labels.dto";
import { LabelModel } from "./labels.model";

@Injectable()
export class LabelsService {
    constructor(@InjectModel(LabelModel) private boardRepository: typeof LabelModel) {}

    async getAllLabels() {
        return await this.boardRepository.findAll();
    }

    async getLabelById(id: number) {
        const label = await this.boardRepository.findByPk(Number(id));

        if (!label) {
            throw new HttpException("Метка не найдена", HttpStatus.BAD_REQUEST);
        }

        return label;
    }

    async createLabel(labelDto: CreateLabelDto) {
        const label = await this.boardRepository.create(labelDto);

        return label;
    }
}
