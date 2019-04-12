export class Chef {
    constructor(
        public chefId: number,
        public nombre: string, 
        public avatar: string, 
        public especialidad: string, 
        public estrellas: number, 
        public biografia: string, 
        public galeria: string[], 
        public localizacion: object, 
        public ciudad: string,
        
        public comentarios: number[]){};

}
