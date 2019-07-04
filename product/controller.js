import * as ProductModel from './model';
import { selectUserById } from '../user/model';

/**
 * 
 * @param {Object} product
 * @param {string} product.name
 * @param {number=} product.quantity
 * @param {number} userId 
 * @returns {number} ID do produto recém adicionado / existente
 */
function add(product, userId, callback) {
    // // encontrar o usuário
    // const user = selectUserById(1);

    // nome do produto não pode ser string vazia, null ou undefined
    // throw {
        
    // }

    // o valor padrão de product.quantity deverá ser 0, caso seja passado 'undefined' ou 'null'

    ProductModel.selectOneByName('nome', 3, function(prod) {
        
    })

    // verificar se existe produto com mesmo nome na lista do usuário referente ao userId (case insensitive)
    // se exitir, não adiciona novo produto, mas atualiza a quantidade
    ProductModel.update({
        id: 2,
        quantity: 3
    })

    // se não existir, adiciona o novo produto com a quantidade
    ProductModel.add({
        name: 'Café',
        quantity: 3
    });
}

function update(product) {

}

function list(params) {

}

function remove(id) {

}

export { add, update, list, remove };
