import Head from 'next/head'
import { ReactNode, FunctionComponent } from 'react';

import {Navbar}  from '../ui';

interface BaseLayoutProps {
    children?: ReactNode;
    title?: string;
  }


const Layout: FunctionComponent<BaseLayoutProps> = ({ children, title }) => {
    return(
        <>
            <Head>
                <title>
                    { title || 'Next.js + TypeScript Example' }
                </title>
                <meta name="author" content="Willy" />
                <meta name="description" content="Pokemon App" />
                <meta name="keywords" content="Pokemon, App" />
            </Head>```
            <Navbar />
            <main style={{
                padding: '0px 20px',
                
            }}>
                { children }
            </main>
        </>
    )
};