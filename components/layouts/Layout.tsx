import Head from 'next/head'
import { ReactNode, FunctionComponent } from 'react';

interface BaseLayoutProps {
    children?: ReactNode;
  }

const Layout: FunctionComponent<BaseLayoutProps> = ({ children }) => {
    return(
        <>
            <Head>
                <title>
                    Pokemon App
                </title>
                <meta name="author" content="Willy" />
                <meta name="description" content="Pokemon App" />
                <meta name="keywords" content="Pokemon, App" />
            </Head>```
            {/* Navbar */}
            <main>
                { children }
            </main>
        </>
    )
};