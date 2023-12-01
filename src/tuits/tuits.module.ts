import { Module } from '@nestjs/common';
import { TuitsController } from './tuits.controller';
import { TuitsService } from './tuits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TuitsEntity } from './tuit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TuitsEntity])],
  controllers: [TuitsController],
  providers: [TuitsService]
})
export class TuitsModule {}
