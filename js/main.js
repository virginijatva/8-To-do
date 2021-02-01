import { Todo } from './components/Todo.js'

const randomUzduotys = new Todo('Random uzduotys');
const namuDarbai = new Todo('Namu darbai');

randomUzduotys.add('Sukurti pirma uzduoti');
randomUzduotys.add('Uzmaisyti tesla');
randomUzduotys.add('Iskepti blynus');

namuDarbai.add('Sutvarkyti Serloko projekta');
namuDarbai.add('Patobulinti sign up');

console.log(randomUzduotys);
console.log(namuDarbai);

randomUzduotys.summary();
namuDarbai.summary();