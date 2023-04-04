import Layout from '@/components/layout';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/guitarras.module.css';

export default function Producto({ guitar, agregarCarrito }) {
  const [cantidad, setCantidad] = useState(0);
  const { name, description, image, price } = guitar[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert('Debes seleccionar una cantidad');
      return;
    }

    const selectedGuitar = {
      id: guitar[0].id,
      image: image.data.attributes.url,
      name,
      price,
      cantidad,
    };

    agregarCarrito(selectedGuitar);
  };

  return (
    <Layout title={`Guitarra ${name}`}>
      <div className={styles.guitarra}>
        <Image
          src={image.data.attributes.url}
          alt={`Imagen guitarra ${name}`}
          width={600}
          height={400}
        />
        <div className={styles.contenido}>
          <h3>{name}</h3>
          <p className={styles.descripcion}>{description}</p>
          <p className={styles.precio}>${price}</p>

          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label htmlFor="cantidad">Cantidad:</label>
            <select
              id="cantidad"
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            >
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
}

// Static Path va acompañado con Static Props
export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const { data } = await respuesta.json();
  const paths = data.map((guitarra) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=image`
  );
  const { data: guitar } = await respuesta.json();

  return {
    props: { guitar },
  };
}

// export async function getServerSideProps({ query: { url } }) {
//   console.log(url);
//   const respuesta = await fetch(
//     `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=image`
//   );
//   const { data: guitar } = await respuesta.json();

//   return {
//     props: { guitar },
//   };
// }
