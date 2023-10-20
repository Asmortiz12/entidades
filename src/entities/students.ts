import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('students', { schema: 'learn' }) // Cambiado de 'ventas' a 'educacion'
export class StudentEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createAt: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updateAt: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt: Date;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    course: string;

    @Column()
    level: string;
    
    @Column()
    carrer: string;

}
