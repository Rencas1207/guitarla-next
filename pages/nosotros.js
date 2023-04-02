import Layout from '@/components/layout';
import Image from 'next/image';

import styles from '../styles/nosotros.module.css';

export default function Nosotros() {
  return (
    <Layout
      title={'Sobre nosotros'}
      description={'Sobre nosotros, guitarLa, tienda de música'}
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            alt="imagen nosotros"
            width={1000}
            height={800}
          />
          <div>
            <p>
              Sed accumsan interdum augue. Donec efficitur dolor et nisl
              ultricies lobortis vehicula sit amet urna. Suspendisse tellus
              lectus, aliquet quis sapien quis, ultrices aliquet tellus. Etiam
              imperdiet arcu et libero convallis, eu aliquet tortor cursus. Nam
              ac diam ac nibh rhoncus feugiat. Phasellus sit amet commodo nulla,
              in rutrum neque.
            </p>
            <p>
              Integer at lacinia nisi. Nam bibendum condimentum nunc eu sodales.
              Cras tempus justo non pharetra ornare. Quisque laoreet luctus sem.
              Quisque id euismod tortor. Phasellus malesuada, tellus ut gravida
              mattis, dui felis semper turpis, eu laoreet magna ex sed ante. Ut
              lacus nibh, efficitur eu sem ut, suscipit egestas libero.
              Suspendisse at quam sit amet mi cursus consequat eu a purus.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
