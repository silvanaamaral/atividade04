const leituraDeLivros = require('./database')

leituraDeLivros.sort( (a,b) => a.paginas - b.paginas)

const pegarEntrada = require('readline-sync')
    
const qualBook = pegarEntrada.question('voce deseja ler um livro ?(S/N)')

if(qualBook.toLocaleUpperCase() == 'S') {

    console.log("As opções de busca são essas: ")
    console.log("1 - Busca por categoria")

    console.log("2 - Minha lista de desejo" )
    console.log("3 - Livros recomendados e lidos")
    console.log("Caso contrário - Todos os livros")

    let opcao = pegarEntrada.question('Escolha uma das buscas?(1/2/3/Nenhuma delas)')

    switch(opcao){

      case '1':  
        //Busca por categoria
        console.log("essas são as categorias disponíveis")
        console.log("Não ficcao , Autoajuda , Politica")
        
        const categoria = pegarEntrada.question("informe uma das categorias: ")

        console.log(categoria)
        let categoriafiltro = leituraDeLivros.filter(livro => livro.categoria === categoria)
        console.table(categoriafiltro)
        break

      case '2':
        //Minha lista de desejo: Deverá listar livros que ainda não foram lidos
       
        const filtrarDesejos = leituraDeLivros.filter(livro =>  livro.leu == false);
    
        console.table('Livros que já leu e os recomendados');
        console.table(filtrarDesejos)   
        break  

      case '3':  
        //Livros recomendados e lidos
        const recomendados = pegarEntrada.question('Me recomenda algum livro ?(S/N)').toLocaleUpperCase()
        const filtrarLidosRecomendados = leituraDeLivros.filter(livro => livro.recomenda == true && livro.leu == true);
    
        if(recomendados == 'S'){

            console.log("essas são as opções disponíveis")
            console.table('Livros que já leu e os recomendados');
            console.table(filtrarLidosRecomendados)   
        }
        break

        default:
        //Otherwise, Caso contário
        console.log('essas serão todas as leitura de livros: ')
        console.table(leituraDeLivros)
    }

}else{
    
    console.log('Uma pena, leitura é bom para alma.')
  
}


