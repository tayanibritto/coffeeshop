import React, { Suspense } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./components/Layout/Layout.module.css";

const ListaPratos = React.lazy(() => import("cardapio/ListaPratos")); // importação dinâmica do micro cardapio
const ListaPedido = React.lazy(() => import("pedido/ListaPedido")); // importação dinâmica do micro pedido

function App() {
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                <Suspense fallback={<div>Carregando...</div>}>

                    <div className={styles.content}>
                        <section className={styles.cardapio} aria-label="Cardápio">

                            {/* Micro responsável pelo catálogo */}
                            <ListaPratos />
                        </section>

                        <section aria-label="Pedido">
                            
                            {/* Micro responsável pelo pedido */}
                            <ListaPedido />
                        </section>
                    </div>
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}

export default App;