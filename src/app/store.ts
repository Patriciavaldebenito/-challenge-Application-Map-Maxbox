export class Coordinates {
    lat:number;
    lng:number;
}


export interface Store {
    Name: string,
    Address: String,
    Coordinates : {  lat:number; lng:number;}
}
