import background from '../../assets/images/pokedex-background.jpg';

const styles = {
    Pokedex: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        minHeight: '100vh',
        width: '100%',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    Pokedex__Container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        overflowY: 'auto',
        '& > *': {
            maxWidth: '1200px'
        }
    },
    Pokedex__Filter: {
        marginBottom: '10px',
        height: 'auto',
        width: '100%',
        overflow: 'hidden',
        borderRadius: '0 0 10px 10px',
        background: 'rgba(255, 255, 255, 0.75)',
        '& > *': {
            maxWidth: '50%'
        }
    },
    Pokedex__Results: {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
        borderRadius: '10px',
        background: 'rgba(255, 255, 255, 0.5)',
        '& > *': {
            margin: '20px'
        }
    }
};

export default styles;