import produtoService from '@/services/produto-service';
import Produto from '@/models/Produto';
import conversorDeData from '@/utils/conversor-data';
import conversorMonetario from '@/utils/conversor-monetario';

let ProdutoMixin = {
    filters: {
        data(data) {
          return conversorDeData.aplicarMascaraEmDataIso(data);
        },
        real(valor) {
          return conversorMonetario.aplicarMascaraParaRealComPreFixo(valor);
        }
      },
    data() {
        return {
            produtos: []
        }
    },
    mounted() {
        this.obterTodosOsProdutos();
    },
    methods: {
        editarProduto(produto) {
            this.$router.push({ name: 'EditarProduto', params: { id: produto.id } });
          },
          excluirProduto(produto) {
            this.$swal({
              icon: 'question',
              title: 'Deseja excluir o produto?',
              text: `Código: ${produto.id} - Nome: ${produto.nome}`,
              showCancelButton: true,
              confirmButtonColor: '#FF3D00',
              confirmButtonText: 'Sim',
              cancelButtonText: 'Não',
              animate: true
            }).then((result) => {
              if (result.isConfirmed) {
                produtoService.deletar(produto.id)
                  .then(() => {
                    // Vamos ter que limpar a tabela
                    let indice = this.produtos.findIndex(p => p.id == produto.id);
                    this.produtos.splice(indice, 1);
      
                    this.$swal({
                      icon: 'success',
                      title: 'Produto deletado com sucesso!',
                      confirmButtonColor: '#FF3D00',
                      animate: true
                    });
      
                  })
                  .catch(error => {
                    console.log(error);
                  });
              }
            });
          },
          obterTodosOsProdutos() {
    
            produtoService.obterTodos()
              .then(response => {
                console.log(response);
                let produtos = response.data.map(p => new Produto(p));
      
                this.produtos = produtos.reverse();
              })
              .catch(error => {
                console.log(error);
              })
        },
        ordenarProdutos(a, b) {
          // A < B = -1
          // A > B = 1
          // A == B = 0
      return (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0;
    },
    }
}

export default ProdutoMixin;