import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { StudentEntity } from './students';

@Entity('teacher', { schema: 'train' }) 
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

    @ManyToMany(() => StudentEntity, student => student.teachers)
    @JoinTable()
    students: StudentEntity[];

    @Column('varchar', {
        name: 'name',
        nullable: false,
        comment: 'teacher name',
      })
      name: string; 
    
      @Column('integer', {
        name: 'phone_number',
        nullable: false,
        comment: 'phone number',
      })
      phoneNumber: number;
    
      @Column('varchar', {
        name: 'email',
        nullable: true,
        comment: 'email',
      })
      email: string;
    
      @Column('varchar', {
        name: 'availability',
        nullable: true,
        comment: 'availability',
      })
      availability: string;
    
      @Column('varchar', {
        name: 'specialization',
        nullable: true,
        comment: 'teacher specialization',
      })
      specialization: string; 
    
      @Column('text', {
        name: 'biography',
        nullable: true,
        comment: 'teacher biography',
      })
      biography: string; 
    
    
    }
    