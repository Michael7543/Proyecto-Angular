import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.model";
import { RolesEntity } from "./roles.model";

@Entity('usuario',{schema:'ventasbdd'})

export class UsuarioEntity{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('identity')
    id:string;
    @CreateDateColumn({
        //objeto
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;//atributo

    @UpdateDateColumn({
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name:'create_at',
        type:'timestamptz',
        nullable:true,
    })

    deleteAt:Date; //el nombre del atributo
    //Relationships
    //paramtrro de entrada =>
    @ManyToOne(() => RolesEntity, (roles) => roles.usuario)
    @JoinColumn({name:'usuario_id'})
    roles: RolesEntity;

    @Column('varchar',{
        name:'nombre',
        comment: 'nombre del usuario',
    })
    nombre:string;

    @Column('varchar',{
        name:'apellido',//nombre de la tabla
        comment:'apellido del  usuario',
    })
    
    apellido:string;//nombre del atributo

    @Column('varchar',{
        name:'direccion',//nombre de la tabla
        comment:'apellido del  usuario',
    })
    
    direccion:string;
    
    @Column('number',{
        name:'cedula',
        unique:true,
        comment:'cedula del usuario'
    })
    cedula:number;

    @Column('number',{
        name:'telefono',
        unique:true,
        comment:'telefono del usuario'
    })
    telefono:number;

//antes de insertar y antes de actualizar

 /*    @BeforeInsert()
    @BeforeUpdate()
    setEmail(){
        if(!this.code){
            return;
        }
        this.code = this.code.toLowerCase().trim();
    }
    async hashPassword(){
       if(!this.password){
        return;
       }
       this.password = await Bcrypt.hash(this.hashPassword, 10);
    } */

}





//user es categoria y photo es producto