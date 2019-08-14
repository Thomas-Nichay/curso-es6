//modulo 1
import {Usuario as Usuario_m1,Admin,map,filter,find,uniao,usuario3} from './modulo1'

const User1 = new Usuario_m1('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true
console.log(map);
console.log(filter);
console.log(find);
console.log(uniao);
console.log(usuario3);

//modulo 2
//1.1
import {Usuario as ClasseUsuario} from './functions(modulo2)';

ClasseUsuario.info();

//1.2
import {idade} from './functions(modulo2)';
console.log(idade);

//1.3
import {Usuario, idade as IdadeUsuario} from './functions(modulo2)';

//modulo 3

//1

import {umPorSegundo} from './modulo3';

umPorSegundo();

//2
import {getUserFromGithub} from './modulo3'

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

//3
import { Github } from "./modulo3";


Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

//4
import { buscaUsuario } from "./modulo3";


buscaUsuario('diego3g');