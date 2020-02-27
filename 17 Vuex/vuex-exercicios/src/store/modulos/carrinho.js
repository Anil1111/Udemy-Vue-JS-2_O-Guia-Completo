export default {
    namespaced: true,
    state: {
        produtos: [
            // { id: 1, nome: 'Produto 1', quantidade: 7, preco: 14.55 },
            // { id: 2, nome: 'Produto 2', quantidade: 10, preco: 22.99 },
            // { id: 3, nome: 'Produto 3', quantidade: 1, preco: 43.18 },
        ]
    },
    getters: {
        valorTotal(state) {
            return state.produtos
                    .map(p => p.quantidade * p.preco)
                    .reduce((total, atual) => total + atual, 0)
        }
    },
    //Setters
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        }
    },
    actions: {
        // adicionarProduto(context, payload) {
        adicionarProduto({ commit }, payload) {
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1000)
        },
        //Desse modo definindo root como true, essa action fica fora do namespace, então onde você importa o mapAction
        //você deve retirar o namespace
        // adicionarProduto: {
        //     root: true,
        //     handler({ commit }, payload) {
        //         setTimeout(() => {
        //             commit('adicionarProduto', payload)
        //         }, 1000)
        //     }
        // }
    }
}