import Layout from '@/components/layout';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import styles from '../styles/carrito.module.css';

export default function Carrito({
  carrito,
  actualizarCantidad,
  eliminarProducto,
}) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculaTotal = carrito.reduce(
      (total, product) => total + product.cantidad * product.price,
      0
    );
    setTotal(calculaTotal);
  }, [carrito]);

  return (
    <Layout title="Carrito de compras">
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>

        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Artículos</h2>
            {carrito?.length === 0
              ? 'Carrito vacío'
              : carrito?.map((producto) => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image
                        width={250}
                        height={480}
                        src={producto.image}
                        alt={producto.name}
                      />
                    </div>
                    <div>
                      <p className={styles.nombre}>{producto.name}</p>

                      <div className={styles.cantidad}>
                        <p>Cantidad:</p>
                        <select
                          defaultValue={producto.cantidad}
                          className={styles.select}
                          onChange={(e) =>
                            actualizarCantidad({
                              id: producto.id,
                              cantidad: parseInt(e.target.value),
                            })
                          }
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      <p className={styles.precio}>
                        $<span>{producto.price}</span>{' '}
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal: $
                        <span>{producto.cantidad * producto.price}</span>{' '}
                      </p>
                    </div>

                    <button
                      type="button"
                      className={styles.btn_delete}
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>

          <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
