export class Chef {
    constructor(
        public _id: any,
        public nombre: string,
        public mail: string, 
        public password: string,
        public avatar: string, 
        public especialidad: string[], 
        public estrellas: number[], 
        public biografia: string, 
        public galeria: string[], 
        public localizacion: object, 
        public ciudad: string,
        public comentarios: object[]
        ){};

}
