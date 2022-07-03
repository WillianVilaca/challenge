//local onde fazemos os controles da API
import { json } from "express";
import fetch from "node-fetch";

class RepositorioController {
    //função para buscarmos os dados dentro do git
    static buscaRepositorio = async (req, resp) => {

        //Apenas um tratamento
        try {
            const urlGit = "https://api.github.com/orgs/takenet/repos";
        
            const respRequisicao = await fetch(urlGit);
        
            let dados = await respRequisicao.json(); 
        
            dados = this.filtrandoLinguagens(dados); 
            dados = this.selecionarImportantes(dados);
            dados = this.definindoQuantidade(dados);

            console.log(`Repositórios retornardos`);
            resp.status(respRequisicao.status).send(dados);

        } catch (error) {
            console.log('Error - ', error)
            res.status(500).send("Erro na requisição");
        }
    }
        

    //função para buscar e inserir os dados que possuem a linguagem C#
    static filtrandoLinguagens(dados)
    {
        const language = resp => resp.language === 'C#';       

        let filter = dados.filter(language)
    
        return filter;
            
    }
    
    //Função para selecionar apenas as "variaveis" importantes para a API
    static selecionarImportantes(dados)
    {
        let lista = [];

        for(let i in dados)
        {
            lista.push(
                [
                    {
                        "language": dados[i].language,
                        "avatar": dados[i].owner.avatar_url,
                        "name": dados[i].name,
                        "description": dados[i].description,
                        "created_at": dados[i].created_at,
                        //"html_url": dados[i].html_url
                    }
                ]
            )
        }

        return lista;
    }

    //função para selecionar apenas 5 
    static definindoQuantidade(dados)
    {
        let repositorios = dados.slice(0, 5);
        return repositorios;
    }
    

    //função para facilitar o uso dos dados no bot
    static selecionarImportantes(dados)
    {

        let facilitarBot = [];
        
        facilitarBot.push(
                {
                    "1": dados[0].owner.avatar_url,
                    "2": dados[0].name,
                    "3": dados[0].description,
                    "4": dados[1].owner.avatar_url,
                    "5": dados[1].name,
                    "6": dados[1].description,
                    "7": dados[2].owner.avatar_url,
                    "8": dados[2].name,
                    "9": dados[2].description,
                    "10": dados[3].owner.avatar_url,
                    "11": dados[3].name,
                    "12": dados[3].description,
                    "13": dados[4].owner.avatar_url,
                    "14": dados[4].name,
                    "15": dados[4].description
                }
        )

        return facilitarBot;
    }
}


export default RepositorioController;