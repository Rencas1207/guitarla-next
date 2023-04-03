import Layout from '@/components/layout';
import Image from 'next/image';
import styles from '../../styles/guitarras.module.css';

export default function Producto({ guitar }) {
  const { name, description, image, price } = guitar[0].attributes;
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
        </div>
      </div>
    </Layout>
  );
}

// Static Path va acompañado con Static Props
export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const { data } = await respuesta.json();
  console.log(data);
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
  console.log(url);
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
