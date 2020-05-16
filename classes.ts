import { Book, DamageLogger, Author, Librarian } from "./interfaces";

class UniversityLibrarian implements Librarian {
    // department: string;    
    // name: string;
    // email: string;

    // assistCustomer: (custName: string) {
    //     console.log(this.name + ' is assisting ' + custName);
    // };

    name!: string;
    department!: string;
    email!: string;

    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);

    };

}

export { UniversityLibrarian };
