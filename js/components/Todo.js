class Todo {
    constructor (pavadinimas) {
        this.name = pavadinimas;
        this.list = [];
    }

    summary() {
        const text = `${this.name} sarase yra ${this.list.length} uzduociu.`
        console.log(text);
    }

    add(text) {
        this.list.push(text);
    }
}

export { Todo }



// class Todo {
//     constructor (name, color) {
//         this.name = name;
//         this.color = color;
//     }

//     greeting() {
//         const text = `Hello, I am ${this.name} and my fur is ${this.color}.`;
//         console.log(text);
//     }

// }


/* klase: Suo
parametrai:
    - vardas
    - kailio spalva
metodai:
    - prisistatymas (Hello, I am {​​​​​name}​​​​​ and my fur is {​​​​​color}​​​​​ 🐕‍🦺) 
    
const suo1 = new Suo('Snowflake', 'red');

    class Suo {​​
    constructor (name, color) {​​
        this.name = name;
        this.color = color;
    }​​

    greeting () {​​
        const greet = `Hello my name is ${​​this.name}​​ and my fur is ${​​this.color}​​!`;
        console.log(greet);
    }​​
}​​*/