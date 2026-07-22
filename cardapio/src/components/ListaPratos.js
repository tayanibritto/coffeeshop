import React from "react";
import styles from "./ListaPratos.module.css";

const pratos = [
    { id: 1, nome: "Bolo de chocolate", descricao: "Bolo com cobertura de chocolate derretido", preco: 19.90 },
    { id: 2, nome: "Capuccino Italiano", descricao: "Leite com café, canela e chocolate", preco: 15.90 },
    { id: 3, nome: "Chocolate Quente", descricao: "Chocolate belga derretido e misturado com leite e creme de leite.", preco: 18.90 },
    { id: 4, nome: "Pão de Queijo", descricao: "Cestinha com 6 mini-pães de queijo", preco: 19.90 },
    { id: 5, nome: "Tostata Caprese", descricao: "Fatia de pão de fermentação natural tostado com queijo mussarela, tomates-cereja e molho pesto.", preco: 24.90 },
];

function ListaPratos() {
    
    // Dispara um evento global que outro micro possa receber o item selecionado
    const adicionarAoPedido = (prato) => {
        window.dispatchEvent(
            new CustomEvent("adicionarItem", { detail: prato })
        );
    };

    return (
        <div className={styles.container}>
            <h2>Cardápio</h2>

            {pratos.map((prato) => (

                // renderiza os produtos do cardápio
                <div className={styles.card} key={prato.id}>
                    <h3>{prato.nome}</h3>
                    <p>{prato.descricao}</p>
                    <p className={styles.preco}>R$ {prato.preco.toFixed(2)}</p>

                    <button className={styles.button} onClick={() => adicionarAoPedido(prato)}>
                        Adicionar ao pedido
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ListaPratos;

