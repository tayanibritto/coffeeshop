# Título:

CoffeeShop

# Descrição:

Aplicação desenvolvida para demonstrar o conceito de Micro Frontends utilizando React e Webpack Module Federation.

O sistema foi dividido em três aplicações independentes:

- Container (Host)
- Micro Cardápio
- Micro Pedido

A integração entre os micros é feita através do Module Federation, permitindo que cada aplicação seja executada e mantida de forma independente. A comunicação entre os micros ocorre por eventos globais utilizando window.dispatchEvent() e window.addEventListener().

## Tecnologias utilizadas:

- React 18
- JavaScript
- Webpack 5
- Webpack Module Federation
- Babel
- CSS Modules

# Arquitetura:

## Container (Host):

Aplicação principal responsável por consumir os micros através do Module Federation.

## Micro Cardápio:

Responsável pela exibição dos produtos disponíveis para pedido.

## Micro Pedido:

Responsável pela exibição dos itens adicionados ao carrinho e cálculo do valor total.

# Instalação:

## 1º Passo: Clonar o repositório

bash:

- git clone https://github.com/tayanibritto/coffeeshop.git
- cd coffeeshop

## 2º Passo: Executar o Micro Cardápio

Abra outro terminal:

- cd cardapio
- npm install
- npm start

A aplicação será iniciada em: http://localhost:3001

## 3º Passo: Executar o Micro Pedido

Abra outro terminal:

- cd pedido
- npm install
- npm start

A aplicação será iniciada em: http://localhost:3002

## 4º Passo: Executar o Container (Host)

Abra outro terminal:

cd container
npm install
npm start

A aplicação será iniciada em: http://localhost:3000

# Comunicação entre os Micros:

A comunicação foi implementada utilizando eventos globais do navegador. Quando o usuário adiciona um item ao pedido no Micro Cardápio, é disparado um evento global:

window.dispatchEvent(
    new CustomEvent("adicionarItem", {
        detail: prato
    })
);

O Micro Pedido escuta esse evento e atualiza a lista de itens:

window.addEventListener(
    "adicionarItem",
    handler
);

## Fluxo de comunicação

Micro Cardápio --> window.dispatchEvent() --> window.addEventListener() --> Micro Pedido

## Module Federation

### Componentes expostos:

Cardápio:

exposes: {
  "./ListaPratos": "./src/components/ListaPratos"
}

Pedido:

exposes: {
  "./ListaPedido": "./src/components/ListaPedido"
}

Componentes consumidos pelo Container:

const ListaPratos = React.lazy(
  () => import("cardapio/ListaPratos")
);

const ListaPedido = React.lazy(
  () => import("pedido/ListaPedido")
);

# Funcionalidades:

- Visualização do cardápio
- Adição de produtos ao pedido
- Carrinho flutuante
- Contador de itens
- Agrupamento de itens repetidos
- Cálculo automático do valor total
- Interface responsiva
- Comunicação entre Micro Frontends
- Integração via Module Federation


