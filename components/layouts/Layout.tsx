import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { NavBar } from '../ui';
 
interface Props extends PropsWithChildren {
    title?: string;
}
 
export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
        <Head>
            <title>{ title || 'PokemonApp' }</title>
            <meta name="author" content="Jeremy" />
            <meta name="description" content="Información sobre el Pokemon XXXXX" />
            <meta name="keywords" content="XXXXX, pokemon, pokedex" />
        </Head>
 
        <NavBar />
 
        <main style={{
          padding: '0 20px'
        }}>
            { children }
        </main>
    </>
  )
}