import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { TeacherEntity } from './teacher';

@Entity('students', { schema: 'learn' }) 
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

    @ManyToMany(() => TeacherEntity, teacher => teacher.students)
    @JoinTable()
    teachers: TeacherEntity[];

    @Column('varchar', {
        name: 'name',
        nullable: false,
        comment: 'student name',
      })
      nameAt: string;
    
      @Column('integer', {
        name: 'age',
        nullable: false,
        comment: 'student age',
      })
      ageAt: number;
    
      @Column('varchar', {
        name: 'address',
        nullable: true,
        comment: 'student address',
      })
      address: string;
    
      @Column('varchar', {
        name: 'email',
        nullable: true,
        comment: 'student email',
      })
      email: string; 
      
      @Column('varchar', {
        name: 'phone_number',
        nullable: true,
        comment: 'student phone number',
      })
      phoneNumber: string;    
    }
