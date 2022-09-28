import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateLabelDto } from "./dto/create-label.dto";
import { LabelModel } from "./models/labels.model";

@Injectable()
export class LabelsService {
    constructor(@InjectModel(LabelModel) private labelsRepository: typeof LabelModel) {}

    async create(labelDto: CreateLabelDto) {
        const label = await this.labelsRepository.create(labelDto);

        return label;
    }

    async findAll() {
        return await this.labelsRepository.findAll();
    }

    async findOne(id: number) {
        const label = await this.labelsRepository.findByPk(Number(id));

        if (!label) {
            throw new HttpException("Метка не найдена", HttpStatus.BAD_REQUEST);
        }

        return label;
    }

    async update(id: number, labelDto: CreateLabelDto) {
        const label = await this.labelsRepository.findByPk(Number(id));

        if (!label) {
            throw new HttpException("Метка не найдена", HttpStatus.BAD_REQUEST);
        }

        await this.labelsRepository.update(labelDto, {
            where: {
                id: label.id,
            },
        });
    }

    async delete(id: number) {
        const label = await this.labelsRepository.findByPk(Number(id));

        if (!label) {
            throw new HttpException("Метка не найдена", HttpStatus.BAD_REQUEST);
        }

        await this.labelsRepository.destroy({
            where: {
                id: label.id,
            },
        });

        return label;
    }
}
