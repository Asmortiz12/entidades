import { CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, Column } from "typeorm";
import { CategoryEntity } from "./category.entity";
@Entity('products', { schema: 'ventas' })

export class ProductEntity {

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
    
    @ManyToOne(()=> CategoryEntity, category => category.products)
    category:CategoryEntity;

    @Column('varchar', {
        name:'title',
        nullable:false,
        comment: 'product name',
        })
        titleAt: string;
        
        @Column('integer', {
            name:'price',
            nullable:false,
            comment: 'product price',
        })
        priceAt:number;
        
        @Column('varchar', {
            name:'description',
            nullable:true,
            comment: 'product description',
        })
        descriptionAt:string;
        
        @Column('varchar',{
            name:'images',
            nullable:true,
            comment: 'product images',
        })
        imageAt:string;

        @Column('varchar', {
            name:'category',
            nullable:false,
            comment:'product category'
        })
        categoryAt:string;

    }
