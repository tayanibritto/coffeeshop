import React, { useEffect, useState } from "react";
import styles from "./ListaPedido.module.css"

function ListaPedido() {
    const [itens, setItens] = useState([]);
    const [aberto, setAberto] = useState(false);

    useEffect(() => {

        // Função executada sempre que um item é recebido pelo evento "aidionarItem"
        const handler = (event) => {
            setItens((prev) => [...prev, event.detail]);

            if (!aberto) {
                setAberto(true); // abre o painel ao adicionar um item
            }
            
        };

        // Registra o listener ao montar o componente
        window.addEventListener("adicionarItem", handler);

        return () => {

            // Remove o listener ao desmontar o componente, evitando vazamento de memória
            window.removeEventListener("adicionarItem", handler);
        };
    }, []);

    // Agrupa itens do pedido com contador de vezes que o usuário adicionar
    const itensAgrupados = itens.reduce((acc, item) => {
        const existente = acc.find(
            (produto) => produto.nome === item.nome
        );

        if (existente) {
            existente.quantidade += 1;
        } else {
            acc.push({
                nome: item.nome,
                preco: item.preco,
                quantidade: 1,
            });
        }

        return acc;

    }, []);

    // Calcular o valor total do pedido
    const totalPedido = itens.reduce(
        (total, item) => total + item.preco,
        0
    );

    const formatarMoeda = (valor) => {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    };

    return (
        <>
            <button className={styles.cart} onClick={() => setAberto(!aberto)}>
                <span>🛒 Pedido </span>
                <span className={styles.badge}>({itens.length})</span>
            </button>

            {aberto && itens.length > 0 && (
                <div className={styles.dashboard}>

                    <h2 className={styles.title}>Itens do pedido</h2>

                    {itensAgrupados.map((item) => (
                        <div className={styles.item} key={item.nome}>
                            <span className={styles.quantidade}>{item.quantidade}</span> 
                            <span>{item.nome}</span>
                            <span>{formatarMoeda(item.quantidade * item.preco)}</span>
                        </div>
                    ))}

                    <div className={styles.total}>
                        Total: {formatarMoeda(totalPedido)}
                    </div>

                </div>
            )}

        </>
                
    );
}

export default ListaPedido