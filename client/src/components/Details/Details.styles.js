const styles = {
    Details: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px'
    },
    Details__Header: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    Details__Close: {
        color: 'white'
    },
    Details__Evolution: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    Details__Stats: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        '& > *': {
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            margin: '10px 20px',
            padding: '10px',
            border: '1px solid black',
            borderRadius: '5px',
            background: 'white'
        }
    },
    Details__Info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '5px'
    },
    Details__List: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '5px'
    },
    Details__Title: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5px',
        fontSize: '1.5em',
        color: '#0D47A1'
    },
    Details__ElemType: {
        margin: '10px',
        height: '50px',
        width: '50px'
    },
    '@media screen and (max-width: 900px)': {
        Details__Stats: {
            '& > *': {
                minWidth: '100%'
            }
        }
    },

};

export default styles;