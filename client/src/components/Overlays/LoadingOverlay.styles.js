const styles = {
    LoadingOverlay: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        background: 'black',
        color: 'white',
        letterSpacing: '2px',
        '& > *': {
            margin: '20px'
        }
    }
};

export default styles;