export class User {

    firstName: string;
    lastName: string;
    birthDate: number;
    addresse: string;
    zip: string;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.addresse = obj ? obj.addresse : '';
        this.zip = obj ? obj.zip : '';
        this.city = obj ? obj.city : '';
    }
}