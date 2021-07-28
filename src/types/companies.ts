export interface ICompany {
    id: string;
    company:string;
    address:{
        city:string;
        street:string;
        streetAddress:string;
    },
    ratings: number;
}