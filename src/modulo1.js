// ex1

export class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }
}

export class Admin extends Usuario {
    constructor() {
        super();
        this.admin = true;
    }
}

// ex2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1
export var map = usuarios.map(usr => usr.idade)

//2.2
export var filter = usuarios.filter(usr =>
    usr.idade >= 18 && usr.empresa === 'Rocketseat'
)

//2.3
export var find = usuarios.find(usr => usr.empresa === 'Google')

//2.4
export var uniao = usuarios.map(usr => {
    let temp = usr;
    temp.idade = usr.idade * 2;
    return temp;
}).filter(usr => usr.idade <= 50)

// ex3

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
export const mostraIdade = (usuario) => usuario.idade;
mostraIdade(usuario);

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade })
mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4
const promise = () => new Promise((resolve, reject) => resolve());

// ex4

// 4.1
const empresa = {
    nome2: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome2, endereco: {cidade, estado}} = empresa;

// 4.2
function mostraInfo({nome,idade}) {
    return `${nome} tem ${idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 })

// ex5

// 5.1
const array = [1, 2, 3, 4, 5, 6];

const [x, ...y] = array;


function soma(...args){
    return args.reduce((total,arg) => total + arg)
}

//5.2

const usuario_ex5 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario_ex5, nome: 'Gabriel'}
export const usuario3 = {...usuario_ex5, endereco: 
    {...usuario_ex5.endereco, cidade: 'Lontras'}
}

// ex6

const usuario_ex6 = 'Diego';
const idade_ex6 = 23;
console.log(`O usuário ${usuario_ex6} possui ${idade_ex6} anos`);

// ex7

const nome_ex7 = 'Diego';
const idade_ex7 = 23;
const usuario_ex7 = {
    nome_ex7,
    idade_ex7,
    cidade: 'Rio do Sul',
};