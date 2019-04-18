export class ComentarioChef {

    constructor(
        public commentId:string,
        public titulo:string,
        public nombreUsuario:string,
        public fotoUsuario:string,
        public puntuacion:number,
        public comentario:string,
        public fecha:string
        ){};
}
