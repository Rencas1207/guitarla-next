import styles from '../styles/curso.module.css';

export default function Course({ course }) {
  const { content, image, title } = course;
  return (
    <section className={`${styles.curso} curso`}>
      <style jsx>
        {`
          .curso {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${image?.data?.attributes?.url});
          }
        `}
      </style>
      <div className={`${styles.grid} contenedor`}>
        <div className={styles.contenido}>
          <h2 className="heading">{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </section>
  );
}
