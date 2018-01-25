const styles = {
    InfoDetails: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        margin: '10px 0',
        width: '100%'
    },
    InfoDetails__Label: {
        fontWeight: 'bold'
    },
    InfoDetails__Value: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxHeight: '350px',
        overflowY: 'auto',
        '& > *': {
            margin: '10px'
        }
    }
};

export default styles;