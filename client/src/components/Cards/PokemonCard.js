import React from 'react';
import injectSheet from 'react-jss';

import styles from './PokemonCard.styles.js';

import { ElementBadge } from '../Badges';

import Pokemon404 from '../../assets/images/pokemon404.jpg';

const PokemonCard = class extends React.Component {
    render() {
        return (
            <div
                className={this.props.classes.PokemonCard}
                onClick={this.props.onClick}
            >
                <img
                    className={this.props.classes.PokemonCard__Image}
                    src={this.props.src ? this.props.src : Pokemon404}
                    alt='Not Yet Scanned'
                />
                <div className={this.props.classes.PokemonCard__Type}>
                    {this.props.types && this.props.types.map((type) => {
                        return (
                            <ElementBadge key={type} type={type} position='center' />
                        );
                    })}
                </div>
                <div className={this.props.classes.PokemonCard__Overlay}>
                    <div className={this.props.classes.PokemonCard__Overlay__Description}>
                        <span>{`#${this.props.number ? this.props.number : '???'} ${this.props.name ? this.props.name : 'Unknown'}`}</span>
                        <div>Click to View Details</div>
                    </div>
                </div>
            </div>
        );
    };
};

const Output = injectSheet(styles)(PokemonCard);

export { PokemonCard as Base, Output };