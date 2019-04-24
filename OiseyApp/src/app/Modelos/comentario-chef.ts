export class ComentarioChef {

    constructor(
        public commentId:string,
        public titulo:string,
        public userName:string,
        public userMail:string,
        public fotoUser:string,
        public puntuacion:number,
        public commentText:string,
        public fecha:string,
        public chefId:string,
        ){};
}
