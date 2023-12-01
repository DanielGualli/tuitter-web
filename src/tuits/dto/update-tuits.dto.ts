import { IsNumber, IsString } from "class-validator";

export class UpdateTuitsDto{
    @IsNumber({}, { message: 'El campo tipo_usuario debe ser un número' })
    id_tuits?: number;
    
    @IsString({ message: 'El campo nombres debe ser una cadena de texto' })
    titulo?: string;

    @IsString({ message: 'El campo nombres debe ser una cadena de texto' })
    director?: string;

    @IsString({ message: 'El campo nombres debe ser una cadena de texto' })
    genero?: string;
    
    @IsNumber({}, { message: 'El campo tipo_usuario debe ser un número' })
    año: number;
}