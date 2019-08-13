import {Usuario,Admin,map,filter,find,uniao,usuario3} from './modulo1'

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true
console.log(map);
console.log(filter);
console.log(find);
console.log(uniao);
console.log(usuario3);

