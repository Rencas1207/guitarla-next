import Layout from '@/components/layout';
import Guitar from '@/components/guitar';

import styles from '../styles/grid.module.css';

export default function Tienda({ guitars }) {
  return (
    <Layout
      title="Tienda virtual"
      description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA"
    >
      <main className="contenedor">
        <h2 className="heading">Nuestra colección</h2>
        <div className={styles.grid}>
          {
            guitars.map(guitar => (
              <Guitar
                key={guitar.id}
                guitar={guitar.attributes}
              />
            ))
          }
        </div>
      </main>
    </Layout>
  );
}

// Primero se ejecuta esta funcion del servidor y luego la parte del cliente (Tienda)
// export async function getStaticProps() {
//   const response = await fetch(
//     `${process.env.API_URL}/guitarras?populate=image`
//   );
//   const { data: guitars } = await response.json();
//   return {
//     props: { guitars },
//   };
// }

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.API_URL}/guitarras?populate=image`
  );
  const { data: guitars } = await response.json();
  return {
    props: { guitars },
  };
}

