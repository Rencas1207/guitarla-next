import { formatDate } from '@/utils/helpers';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/blog.module.css';

export default function Post({ post }) {
  const { content, title, image, url, publishedAt } = post;
  return (
    <article>
      <Image
        width={600}
        height={400}
        src={image.data.attributes.formats.medium.url}
        alt={`imagen blog ${title}`}
      />
      <div className={styles.contenido}>
        <h3>{title}</h3>
        <p className={styles.fecha}>{formatDate(publishedAt)}</p>
        <p className={styles.resumen}>{content}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>
          Leer post
        </Link>
      </div>
    </article>
  );
}
