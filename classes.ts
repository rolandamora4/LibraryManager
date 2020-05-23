import * as Interfaces from "./interfaces";

class UniversityLibrarian implements Interfaces.Librarian {
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

abstract class ReferenceItem {
    // title: string;
    // private year: number;

    private _publisher!: string;
    static department: string = 'Reasearh';

    constructor(public title: string, protected year: number)
    {
        // console.log('Creating a new reference item..');
        // this.title = newTitle;
        // this.year = newYear;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    get publisher(): string {
        return this._publisher;
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    abstract printCitation(): void;
}



export { UniversityLibrarian, ReferenceItem };
