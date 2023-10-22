import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Column, OneToOne } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('role', { schema: 'rol' })

export class RoleEntity {

    @PrimaryGeneratedColumn('identity')
        id: number;
    
    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP,'
    })
    createAt:Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP,'
    })
    updateAt:Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt:Date;
    
    @OneToOne(()=> UserEntity, user => user.rol)
    user:UserEntity;

    @Column('varchar', {
        name:'title',
        nullable:false,
        comment: 'rol name',
        })
        titleAt: string;
        
        @Column('varchar', {
            name:'description',
            nullable:true,
            comment: 'rol description',
        })
        descriptionAt:string;

    }