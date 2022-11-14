import type { NextPage, GetStaticProps } from 'next';
import { Layout } from '../components/layouts';


const HomePage: NextPage = (props) => {

  console.log(props);

  return (
    <div> 
      <Layout title='Listado de pokemones'>

        <ul>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
        </ul>

        
      </Layout>
    </div>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  return {
    props: {

    }
  }
}

export default HomePage;
