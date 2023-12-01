import { TuitsEntity } from 'src/tuits/tuit.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable } from 'typeorm';

@Entity({ name: 'user' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ type: 'varchar', nullable: false })
  nombre: string;

  @OneToMany(() => TuitsEntity, tuits => tuits.users)
  tuits: TuitsEntity[];
}