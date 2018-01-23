const styles = {
    ElementBadge: {
        position: 'relative',
        height: '100px',
        width: '100px',
        '& > *': {
            position: 'absolute'
        }
    },
    ElementBadge__Badge: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        borderRadius: '50%',
        boxShadow: '0 0 3px rgba(0, 0, 0, 0.5)',
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
        },
        '&:hover + $ElementBadge__Hint': {
            border: '1px solid rgba(0, 0, 0, 0.1)',
            maxHeight: 'calc(1em + 20px)',
            padding: '10px',
            opacity: '1'
        },
        '& > img': {
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain'
        }
    },
    ElementBadge__Hint: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        top: 'calc(100% + 10px)',
        left: 'calc(-1 * (75px - 50%))',
        maxHeight: '0',
        width: '150px',
        overflow: 'hidden',
        border: 'none',
        borderRadius: '5px',
        padding: '0',
        background: 'rgba(255, 255, 255, 0.9)',
        opacity: '0',
        transition: 'max-height 0.2s, padding 0.2s, opacity 0.2s',
        '&.left': {
            left: 'calc(100% - 150px)'
        },
        '&.right': {
            left: 0
        },
        '& > .title': {
            fontSize: '1.25em',
            fontWeight: 'bold'
        }
    },
};

export default styles;