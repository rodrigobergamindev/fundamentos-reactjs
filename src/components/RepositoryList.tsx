import {RepositoryItem} from './RepositoryItem'
import '../styles/repositories.scss'
import { useState, useEffect } from 'react';




// https://api.github.com/users/rodrigobergamindev/repos


interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);


   //useEffect é um hook de efeito que será usado toda vez que houver
   //alguma mudança em uma variável na minha aplicação, ou outra mudança que eu fizer na minha aplicação 
   //useEffect recebe dois parâmetros, o primeiro é a função que eu quero executar
   //O segundo é quando eu vou executar essa função, quando a variável passada como referência, mudar

   useEffect(() => {
       fetch('https://api.github.com/users/rodrigobergamindev/repos')
       .then(response => response.json())
       .then(data => setRepositories(data))
   }, []) //se o array estiver vazio, a função irá executar somente uma vez


    return (
       <section className="repository-list">
           <h1>Lista de repositórios</h1>
           <ul>

               {
                repositories.map(repository => {
                    return <RepositoryItem key ={repository.name} repository={repository}/>
                })
               }
           </ul>
       </section>
    )
}
