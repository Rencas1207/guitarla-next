import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="contenedor">
        <Image
          src="/img/logo.svg"
          width={300}
          height={40}
          alt="imagen logotipo"
        />
        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/tienda">Tienda</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
