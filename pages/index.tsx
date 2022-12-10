import type { NextPage, GetStaticProps } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}


const HomePage: NextPage<Props> = (pokemons) => {

  console.log(pokemons);
  const pokemons = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/pokemon/other/dream-world/${i+1}.svg`
  }
  )



  )

  return (
    <div> 
      <Layout title='Listado de pokemones'>

        <ul>
          <li>Pokemon</li>
        </ul>

        
      </Layout>
    </div>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');


  return {
    props: {
      pokemons

    }
  }
}

export default HomePage;
