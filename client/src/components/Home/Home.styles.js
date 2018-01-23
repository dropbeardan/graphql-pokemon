const styles = {
	Home: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
		width: '100%'
	},
	Home__Container: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
		width: '100%',
		maxWidth: '1200px',
	},
	Home__Hero: {
		display: 'flex',
		flexWrap: 'wrap',
		width: '100%',
		height: '75vh',
		'& > *': {
			padding: '20px'
		},
		'& > *:first-child': {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			alignItems: 'center',
			minWidth: '20%'
		},
		'& > *:last-child': {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			'& > *': {
				margin: '10px 0'
			}
		}
	},
	Home__Hero__Header: {
		marginBottom: '1em !important',
		fontFamily: 'Pokemon Hollow, Roboto, sans-serif',
		fontSize: '4em',
		lineHeight: '1.25em',
		letterSpacing: '10px',
		textAlign: 'center',
		color: 'blue'
	},
	Home__Hero__Main: {
		fontSize: '2em'
	},
	'@media screen and (max-width: 1000px)': {
		Home__Hero: {
			'& > *': {
				width: '100%'
			}
		}
	}
};

module.exports = styles;