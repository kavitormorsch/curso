// defineProperty - defineProperties

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: false, // define se pode configurar (a função defineProperty) e deletar essa propriedade
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) { 
            if ( typeof valor !== 'number') {
                throw new TypeError ('valor passado não é um número');
            }
            estoquePrivado = valor;
        }
    });

   

}

    function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '')
            nome = valor;
        }
    }
}

//const p1 = new Produto('Camiseta', 20, 3);
//p1.estoque = 'h';
//console.log(p1.estoque);

const p2 = criaProduto("Camiseta");
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);