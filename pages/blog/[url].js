import Layout from '@/components/layout';
import { formatDate } from '@/utils/helpers';
import Image from 'next/image';

import styles from '../../styles/blog.module.css';

export default function Post({ post }) {
  const { title, content, image, publishedAt } = post[0].attributes;

  return (
    <Layout title={title}>
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image
          width={1000}
          height={400}
          src={image.data.attributes.url}
          alt={`imagen blog ${title}`}
        />
        <div className={styles.contenido}>
          <h3>{title}</h3>
          <p className={styles.fecha}>{formatDate(publishedAt)}</p>
          <p className={styles.texto}>{content}</p>
        </div>
      </article>
    </Layout>
  );
}

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=image`
  );
  const { data: post } = await respuesta.json();

  return {
    props: { post },
  };
}
