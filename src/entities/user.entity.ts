import { CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, Column } from "typeorm";
import { RoleEntity } from "./role.entity";

@Entity('user', { schema: 'user' })

export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
        id: string;
    
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
    
    @OneToOne(()=> RoleEntity, rol => rol.user)
    rol:RoleEntity;

    @Column('varchar', {
        name:'title',
        nullable:false,
        comment: 'user name',
        })
        titleAt: string;
        
        @Column('varchar', {
            name:'description',
            nullable:true,
            comment: 'user description',
        })
        descriptionAt:string;
        
        @Column('varchar',{
            name:'images',
            nullable:true,
            comment: 'user images',
        })
        imageAt:string;

        @Column('varchar', {
            name:'category',
            nullable:false,
            comment:'type user'
        })
        categoryAt:string

    }