import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Column, OneToMany } from "typeorm";
import { ProductEntity } from "./product.entities";

@Entity('categories', { schema: 'ventas' })

export class CategoryEntity {

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
    
    @OneToMany(()=> ProductEntity, product=> product.category)
    products:ProductEntity [];

    @Column('varchar', {
        name:'title',
        nullable:false,
        comment: 'category name',
        })
        titleAt: string;
        
        @Column('varchar', {
            name:'description',
            nullable:true,
            comment: 'category decription',
        })
        descriptionAt:string;
    }