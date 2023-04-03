import Course from '@/components/course';
import Guitar from '@/components/guitar';
import Layout from '@/components/layout';
import Post from '@/components/post';

import styles from '../styles/grid.module.css';

export default function Home({ guitars, posts, course }) {
  console.log(course);
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de música, venta de guitarras y más'}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra colección</h1>

          <div className={styles.grid}>
            {guitars?.map((guitar) => (
              <Guitar key={guitar.id} guitar={guitar.attributes} />
            ))}
          </div>
        </main>

        <Course course={course.attributes} />

        <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={styles.grid}>
            {posts?.map((post) => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query: { url } }) {
  const urlGuitars = `${process.env.API_URL}/guitarras?populate=image`;
  const urlPosts = `${process.env.API_URL}/posts?populate=image`;
  const urlCourse = `${process.env.API_URL}/course?populate=image`;

  const [resGuitar, resPosts, resCourse] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts),
    fetch(urlCourse),
  ]);

  const [{ data: guitars }, { data: posts }, { data: course }] =
    await Promise.all([resGuitar.json(), resPosts.json(), resCourse.json()]);

  return {
    props: { guitars, posts, course },
  };
}
