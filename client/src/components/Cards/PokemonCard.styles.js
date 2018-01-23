import { jss } from 'react-jss';

const styles = {
    PokemonCard: {
        position: 'relative',
        height: '300px',
        width: '250px',
        boxShadow: '0 0 2px rgba(0, 0, 0, 0.25)',
        transition: 'box-shadow 0.2s',
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '0 0 6px rgba(1, 50, 150, 0.5)',
            '& $PokemonCard__Overlay__Description > *:last-child': {
                maxHeight: '1em'
            }
        },
        '& > *': {
            position: 'absolute'
        }
    },
    PokemonCard__Image: {
        objectFit: 'cover'
    },
    PokemonCard__Type: {
        display: 'flex',
        flexDirection: 'row-reverse',
        height: '100%',
        width: '100%',
        zIndex: '1',
        '& > *': {
            margin: '5px',
            height: '25px',
            width: '25px'
        }
    },
    PokemonCard__Overlay: {
        display: 'flex',
        alignItems: 'flex-end',
        height: '100%',
        width: '100%'
    },
    PokemonCard__Overlay__Description: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 10px',
        width: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        '& > *': {
            margin: '5px 0'
        },
        '& > *:first-child': {
            fontSize: '1.5em',
            fontWeight: 'bold',
            color: 'white'
        },
        '& > *:last-child': {
            overflow: 'hidden',
            fontSize: '1.25em',
            color: 'white',
            maxHeight: '0',
            transition: 'max-height 0.2s'
        }
    }
};

export default styles;