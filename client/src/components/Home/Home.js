import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';

import styles from './Home.styles.js';

import { RoundButton } from '../Buttons';

import Mascot from '../../assets/images/mascot.png';

const Home = class extends React.Component {
	render() {
		return (
			<section className={this.props.classes.Home} >
				<div className={this.props.classes.Home__Container}>
					<div className={this.props.classes.Home__Hero}>
						<div className={this.props.classes.Home__Hero__Description}>
							<header className={this.props.classes.Home__Hero__Header}>Pokémon GraphQL</header>
							<main className={this.props.classes.Home__Hero__Main}>For lovers of Pokémon</main>
							<Link to='/pokedex'>
								<RoundButton
									label="Open the Pokédex"
									backgroundColor='#FFFFFF'
									hoverColor='#FCE4EC'
									rippleColor='#3F51B5'
									style={{
										RoundButton: {
											background: 'white'
										},
										RoundButton__Label: {
											fontSize: '1.25em'
										}
									}}
								/>
							</Link>
						</div>
						<div className={this.props.classes.Home__Hero__Mascot}>
							<img src={Mascot} alt='Professor Oak welcomes you!' />
						</div>
					</div>
				</div>
			</section >
		);
	};
};

export default injectSheet(styles)(Home);
