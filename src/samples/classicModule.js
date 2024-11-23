//Классы более структурированы, чем IIFE-функции

class MyModule {
    #dep1;
    #dep2;

    #privateVar = "I'am a private";

    constructor(dep1, dep2) {
        this.#dep1 = dep1;
        this.#dep2 = dep2;
    }

    #privateMethod() {
        console.log('Accessing to a Private Method');
    }

    publicMethod() {
        console.log('Accessing to a Public Method');
        console.log(this.#privateVar, this.#dep1, this.#dep2);
        this.#privateMethod();
    }
}


const myModule = new MyModule('dep1', 'dep2');
myModule.publicMethod();
// console.log(myModule.#privateMethod); // Syntax error
