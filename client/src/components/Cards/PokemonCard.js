import React from 'react';
import injectSheet from 'react-jss';

import styles from './PokemonCard.styles.js';

import Pokemon404 from '../../assets/images/pokemon404.jpg';

const PokemonCard = class extends React.Component {
    render() {
        return (
            <div className={this.props.classes.PokemonCard}>
                <img
                    className={this.props.classes.PokemonCard__Image}
                    src={this.props.src ? this.props.src : Pokemon404}
                    alt='Not Yet Scanned'
                />
                <div className={this.props.classes.PokemonCard__Type}>
                </div>
                <div className={this.props.classes.PokemonCard__Overlay}>
                    <div className={this.props.classes.PokemonCard__Overlay__Description}>
                        <span>{`#${this.props.id ? this.props.id : '???'} ${this.props.name ? this.props.name : 'Unknown'}`}</span>
                        <div>Click to View Details</div>
                    </div>
                </div>
            </div>
        );
    };
};

export default injectSheet(styles)(PokemonCard);