import { IsNumber, IsString } from "class-validator";

export class CreateUsuerdto{
    @IsNumber({}, { message: 'El campo tipo_usuario debe ser un número' })
    id_usuario: number;

    @IsString({ message: 'El campo nombres debe ser una cadena de texto' })
    nombre: string;
}