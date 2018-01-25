import React from 'react';
import injectSheet from 'react-jss';

import styles from './Logo.styles.js';

import PokemonGQLLogo from '../../assets/images/logo.gif';

const Logo = class extends React.Component {
    render() {
        return (
            <div className={this.props.classes.Logo}>
                <div>
                    <img src={PokemonGQLLogo} alt='' />
                </div>
                <div>
                    <span>Pokémon</span>
                    <span>GraphQL</span>
                </div>
            </div>
        );
    };
};

const Output = injectSheet(styles)(Logo);

export { Logo as Base, Output };