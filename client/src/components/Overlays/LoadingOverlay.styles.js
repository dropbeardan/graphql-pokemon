const styles = {
    LoadingOverlay: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        minHeight: '100vh',
        width: '100%',
        minWidth: '100vh',
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