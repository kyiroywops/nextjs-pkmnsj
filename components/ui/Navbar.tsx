import {Text, useTheme, Spacer} from '@nextui-org/react';
import Image from 'next/image';

export const NavBar = () => {

    const {theme} = useTheme();
    console.log(theme);
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0x 20px',
            backgroundColor: theme?.colors.gray900.value

        }}>

        <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="icono de la app" width={70} height={70} />
        
        <Text color='white' h2>P</Text>
        <Text color='white' h3>okemon</Text>

        <Spacer css={{flex: 1}} />
        <Text color='white'>Favoritos</Text>
        </div>
    )
};