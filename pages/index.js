import Layout from '@/components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de música, venta de guitarras y más'}
      >
        <h1>Hola Mundo en Next</h1>
        <Link href="/nosotros">Nosotros</Link>
      </Layout>
    </>
  );
}
