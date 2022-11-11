import {Text, useTheme, Spacer} from '@nextui-org/react';

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
        <Text color='white' h2>P</Text>
        <Text color='white' h3>okemon</Text>

        <Spacer css={{flex: 1}} />
        <Text color='white' h2>Favoritos</Text>
        </div>
    )
};