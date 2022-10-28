import type { NextPage } from 'next';
import { Button } from '@nextui-org/react';
import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <div> 
      <Layout>
        <Button>Click me</Button>
      </Layout>
    </div>
    )
}

export default HomePage;
