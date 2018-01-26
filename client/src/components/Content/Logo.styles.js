const styles = {
	Logo: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'center',
		height: '100%',
		'&:hover': {
			cursor: 'pointer',
			'& > div > *': {
				transform: 'translate(-1px,-1px)',
				textShadow: '3px 3px #3466af'
			}
		},
		'& > *:first-child': {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100%',
			'& > img': {
				maxHeight: '100%',
				objectFit: 'contain'
			}
		},
		'& > *:last-child': {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			margin: '-5px 0 0 10px',
			height: '100%',
			'& > *': {
				fontFamily: 'Pokemon, Roboto, Sans Serif',
				fontSize: '1.5em',
				letterSpacing: '3px',
				lineHeight: '1.25',
				color: '#ffcb05',
				textShadow: '2px 2px #3466af'
			}
		}
	}
};

export default styles;
