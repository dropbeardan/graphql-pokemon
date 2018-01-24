const styles = {
    InfoButton: {
        position: 'relative',
        height: '24px',
        width: '24px',
        '& > *': {
            position: 'absolute'
        }
    },
    InfoButton__Icon: {
        color: 'black',
        opacity: '0.25',
        transition: 'opacity 0.2s',
        '&:hover': {
            cursor: 'pointer',
            opacity: '0.75',
            '& + $InfoButton__Hint': {
                border: '1px solid rgba(0, 0, 0, 0.1)',
                maxHeight: '9999px',
                padding: '10px',
                opacity: '1'
            }
        },
        '&.disabled': {
            cursor: 'default'
        }
    },
    InfoButton__Hint: {
        zIndex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        top: 'calc(100% + 10px)',
        left: 'calc(-1 * (100px - 50%))',
        maxHeight: '0',
        width: '200px',
        overflow: 'hidden',
        border: 'none',
        borderRadius: '5px',
        padding: '0',
        background: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'center',
        lineHeight: '1.5',
        fontSize: '1rem',
        color: 'black',
        opacity: '0',
        transition: 'max-height 0.2s, padding 0.2s, opacity 0.2s',
        '&.left': {
            left: 'calc(100% - 200px)'
        },
        '&.right': {
            left: 0
        },
        '&.disabled': {
            display: 'none'
        }
    }
};

export default styles;