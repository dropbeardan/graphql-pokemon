import background from '../../assets/images/home-background.jpg';

const styles = {
	Home: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		minHeight: '100vh',
		width: '100%',
		backgroundImage: `url(${background})`,
		backgroundSize: 'cover',
		backgroundPosition: 'bottom'
	},
	Home__Container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		height: '100%',
		width: '100%',
		overflowY: 'auto',
		'& > *': {
			maxWidth: '1200px'
		}
	},
	Home__Hero: {
		display: 'flex',
		flexWrap: 'wrap',
		height: '100vh',
		width: '100%',
		'& > *': {
			padding: '20px'
		},
	},
	Home__Hero__Mascot: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end',
		minWidth: '20%'
	},
	Home__Hero__Description: {
		flex: '1',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		'& > *': {
			margin: '10px 0'
		}
	},
	Home__Hero__Header: {
		marginBottom: '1em !important',
		fontFamily: 'Pokemon, Roboto, sans-serif',
		fontSize: '4em',
		lineHeight: '1.25em',
		letterSpacing: '10px',
		textAlign: 'center',
		color: '#AB47BC'
	},
	Home__Hero__Main: {
		fontSize: '2em',
		color: '#E91E63'
	},
	'@media screen and (max-width: 400px)': {
		Home__Hero__Header: {
			fontSize: '3.5em'
		}
	},
	'@media screen and (max-width: 1000px)': {
		Home__Hero: {
			'& > *': {
				width: '100%'
			}
		}
	}
};

export default styles;