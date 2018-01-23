import React from 'react';
import injectSheet from 'react-jss';

import styles from './Home.styles.js';

import { LinkButton } from '../Buttons';

import Mascot from '../../assets/images/mascot.png'

const Home = (props) => {
	return (
		<section className={props.classes.Home}>
			<div className={props.classes.Home__Container}>
				<div className={props.classes.Home__Hero}>
					<div>
						<img src={Mascot} alt='Professor Oak welcomes you!' />
					</div>
					<div className={props.classes.Home__Hero__Description}>
						<header className={props.classes.Home__Hero__Header}>Pokémon GraphQL</header>
						<main className={props.classes.Home__Hero__Main}>For lovers of Pokémon</main>
						<LinkButton
							label="Visit the Laboratory"
							url='/pokedex'
							hoverColor='#E3F2FD'
							rippleColor='#3F51B5'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default injectSheet(styles)(Home);
