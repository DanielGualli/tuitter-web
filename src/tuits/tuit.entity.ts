import { Entity, PrimaryGeneratedColumn, Column, JoinTable, JoinColumn, ManyToMany, OneToMany,ManyToOne } from 'typeorm';

@Entity({ name: 'tuits' })
export class TuitsEntity {
  @PrimaryGeneratedColumn()
  id_tuits: number;

  @Column({ type: 'varchar', nullable: false })
  titulo: string;

  @Column({ type: 'varchar', nullable: false })
  typo: string;

  @Column({ type: 'varchar', nullable: false })
  genero: string;

  @Column({ type: 'numeric', nullable: false })
  año: number;

}
