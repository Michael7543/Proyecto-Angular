import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.model";
import { UsuarioEntity } from "./usuario.model";

@Entity('roles',{schema:'ventasbdd'})

export class RolesEntity{
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
    @ManyToOne(() => UsuarioEntity, (usuario) => usuario.roles)
    @JoinColumn({name:'usuario_id'})
    usuario: UsuarioEntity;

    @Column('varchar',{
        name:'nombre_rol',
        unique:true,
        comment: 'nombre del rol',
    })
    nombre_rol:string;

    @Column('varchar',{
        name:'permisos',//nombre de la tabla
        unique:true,
        comment:'precio del  producto',
    })
    
    permisos:string;//nombre del atributo
    
    @Column('varchar',{
        name:'description',
        comment:'descripcion del rol'
    })
    description:string;

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