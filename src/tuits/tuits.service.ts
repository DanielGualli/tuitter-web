import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TuitsEntity } from './tuit.entity';
import { CreateTuitsDto } from './dto/create-tuits.dto';
import { UpdateTuitsDto } from './dto/update-tuits.dto';
import { Repository } from 'typeorm';
import { PaginationDto } from './dto/pagination_tuits.dto';

@Injectable()
export class TuitsService {
    constructor(
        @InjectRepository(TuitsEntity)
        private readonly tuitsRepository: Repository<TuitsEntity>,
      ) {}
    

      async getPaginacion({ limit, offset }: PaginationDto) {
        return await this.tuitsRepository.find({
          relations: ['user'],
          skip: offset,
          take: limit,
        });
      }
    
      async createTuits(tuits: CreateTuitsDto) {
        const { titulo } = tuits;
        const exists = await this.tuitsRepository.findOne({
          where: [{ titulo: titulo }],
        });
        if (exists)
          throw new BadRequestException(new Error('Tuits ya registrada'));
    
        const newTuits = this.tuitsRepository.create(tuits);
        return await this.tuitsRepository.save(newTuits);
      }
    
      async getTuitsById(id_tuits: number) {
        return await this.tuitsRepository.findOne({
          where: {
            id_tuits,
          },
        });
      }
    
      async deleteTuits(id_tuits: number) {
        return await this.tuitsRepository.delete({ id_tuits });
      }
    
      async updateTuits(id_tuits: number, tuits: UpdateTuitsDto) {
        return await this.tuitsRepository.update({ id_tuits }, tuits);
      }
}
