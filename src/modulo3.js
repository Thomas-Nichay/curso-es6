// Funão delay aciona o .then após 1s

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

export async function umPorSegundo() {
    await delay()
    console.log('1s');

    await delay()
    console.log('2s');

    await delay()
    console.log('3s');

}

import axios from 'axios';
export async function getUserFromGithub(user) {
    try{
        let resp = await axios.get(`https://api.github.com/users/${user}`)
        console.log(resp.data);
    }catch(err){
        console.log('Usuário não existe');
    }
}

export class Github {
    static async getRepositories(repo) {
        try {
            let response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (err) {
            console.log('Repositório não existe');
        }
    }
}


export const buscaUsuario = async usuario => {
    try {
        let response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.log('Usuário não existe');
    }
}