import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model } from "sequelize-typescript";
import { CreateLabelDto } from "./dto/labels.dto";

@Table({ tableName: "labels" })
export class LabelModel extends Model<LabelModel, CreateLabelDto> {
    @ApiProperty({
        example: "1",
        description: "Уникальный идентификатор",
    })
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    })
    id: number;

    @ApiProperty({
        example: "Метка 1",
        description: "Заголовок метки",
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @ApiProperty({
        example: "#fff",
        description: "Цвет метки в формате HEX",
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    hexColor: string;
}
