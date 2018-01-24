const styles = {
    AttackDetails: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 0',
        '& > *': {
            display: 'flex'
        }
    },
    AttackDetails__Name: {
        fontWeight: 'bold'
    },
    AttackDetails__Damage: {
        marginRight: '10px',
        color: 'red'
    },
    AttackDetails__Type: {
        height: '20px',
        width: '20px'
    }
};

export default styles;