import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Click {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  count: number;
}
