import background from '../../assets/images/pokedex-background.jpg';

const styles = {
    Pokedex: {
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    Pokedex__Container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        overflowY: 'auto',
        '& > *': {
            maxWidth: '1200px'
        }
    },
    Pokedex__Filter: {
        marginBottom: '10px',
        height: 'auto',
        minHeight: '75px',
        width: '100%',
        overflow: 'hidden',
        borderRadius: '0 0 10px 10px',
        background: 'rgba(255, 255, 255, 0.75)',
        '& > *': {
            maxWidth: '50%'
        }
    },
    Pokedex__Results: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
        '& > *': {
            margin: '20px'
        }
    },
    Pokedex__Details: {
        zIndex: '2',
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        overflowY: 'auto',
        background: 'rgba(0, 0, 0, 0.9)',
        '&.hidden': {
            display: 'none'
        }
    }
};

export default styles;