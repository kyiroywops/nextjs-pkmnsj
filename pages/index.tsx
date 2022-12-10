import type { NextPage, GetStaticProps } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}


const HomePage: NextPage<Props> = (pokemons) => {


  return (
    <div> 
      <Layout title='Listado de pokemones'>

        <ul>
        {
          pokemons.map( ({id, name}) => {
             <li key= { pokemon.id}>
               #{id} - Nombre {name}


            </li>
        }
        )
        }

         </ul>

        
      </Layout>
    </div>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');


  return {
    props: {
      pokemons:data.results

    }
  }
}

export default HomePage;
