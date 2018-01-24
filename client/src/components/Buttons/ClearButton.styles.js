const styles = {
    ClearButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
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