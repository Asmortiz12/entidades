import { CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, Column, OneToMany } from "typeorm";
import { BooksEntity } from "./book.entity";

@Entity('authors', { schema: 'write' })

export class AuthorsEntity {

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
    
    @OneToMany(()=> BooksEntity, book => book.authors)
    books:BooksEntity;

    @Column('varchar', {
        name:'title',
        nullable:false,
        comment: 'author name',
        })
        titleAt: string;
        
        @Column('integer', {
            name:'price',
            nullable:false,
            comment: 'witten books',
        })
        priceAt:number;
        
        @Column('varchar', {
            name:'description',
            nullable:true,
            comment: 'author biography',
        })
        descriptionAt:string;
        
        @Column('varchar',{
            name:'images',
            nullable:true,
            comment: 'author images',
        })
        imageAt:string;

    }