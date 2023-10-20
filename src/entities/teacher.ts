import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('teaches', { schema: 'train' }) 
export class TeacherEntity {

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
    title: string;

    @Column()
    assignedCourses: number;
    
    @Column()
    matter: string;
}
