export class User {

    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    address: string;
    zip: string;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.address = obj ? obj.address : '';
        this.zip = obj ? obj.zip : '';
        this.city = obj ? obj.city : '';
    }

    toJSON() {
        return {
            'firstName': this.firstName,
            'lastName': this.lastName,
            'email': this.email,
            'birthDate': this.birthDate,
            'address': this.address,
            'zip': this.zip,
            'city': this.city
        }
    }
}