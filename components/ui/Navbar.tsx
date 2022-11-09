import {Text, useTheme} from '@nextui-org/react';

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
        <span>test</span>
        <Text></Text>
        </div>
    )
};