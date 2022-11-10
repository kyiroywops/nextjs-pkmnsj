import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
 
interface Props extends PropsWithChildren {
    title?: string;
}
 
export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
        <Head>
            <title>{ title || 'PokemonApp' }</title>
            <meta name="author" content="Erick Cinco" />
            <meta name="description" content="Información sobre el Pokemon XXXXX" />
            <meta name="keywords" content="XXXXX, pokemon, pokedex" />
        </Head>
 
        {/* Navbar */}
 
        <main>
            { children }
        </main>
    </>
  )
}