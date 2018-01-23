const styles = {
    SearchField: {
        display: 'flex',
        alignItems: 'flex-end',
        maxWidth: '100%'
    },
    SearchField__Input: {
        flex: '1'
    },
    SearchField__Clear: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginBottom: '10px',
        padding: '1px',
        borderRadius: '50%',
        color: 'rgba(255, 0, 0, 0.5)',
        transition: 'background 0.2s, color 0.2s',
        '&:hover:not(.disabled)': {
            cursor: 'pointer',
            background: 'rgba(255, 0, 0, 0.5)',
            color: 'white'
        },
        '&.disabled': {
            cursor: 'default',
            color: 'rgba(0, 0, 0, 0.1)'
        }
    }
};

export default styles;