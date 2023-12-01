import { Controller, Post, Patch, Get,Delete, Body, Param, Query } from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { CreateTuitsDto } from './dto/create-tuits.dto';
import { UpdateTuitsDto } from './dto/update-tuits.dto';
import { PaginationDto } from './dto/pagination_tuits.dto';

@Controller('tuits')
export class TuitsController {
    constructor(private tuitsService: TuitsService) {}

    @Post()
    createTuits(@Body() newTuits: CreateTuitsDto) {
      return this.tuitsService.createTuits(newTuits);
    }
  
    @Get(':id_tuits')
    getTuitsById(@Param('id_tuits') id: number) {
      return this.tuitsService.getTuitsById(id);
    }

    @Get()
    getPaginacion(@Query() pagination: PaginationDto) {
      return this.tuitsService.getPaginacion(pagination);
    }
  
    @Delete(':id_tuits')
    deleteTuits(@Param('id_tuits') id: number) {
      return this.tuitsService.deleteTuits(id);
    }
  
    @Patch(':id_tuits')
    updateTuits(@Param('id_tuits') id: number, @Body() tuits: UpdateTuitsDto) {
      return this.tuitsService.updateTuits(id, tuits);
    }
}
