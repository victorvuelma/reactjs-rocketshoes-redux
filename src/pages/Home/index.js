import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-masculino/05/D12-9660-205/D12-9660-205_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Nike</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-masculino/05/D12-9660-205/D12-9660-205_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Nike</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-masculino/05/D12-9660-205/D12-9660-205_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Nike</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-masculino/05/D12-9660-205/D12-9660-205_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Nike</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-masculino/05/D12-9660-205/D12-9660-205_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Nike</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-masculino/05/D12-9660-205/D12-9660-205_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Nike</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
