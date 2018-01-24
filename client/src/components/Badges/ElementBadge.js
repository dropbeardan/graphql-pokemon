import React from 'react';
import injectSheet from 'react-jss';

import styles from './ElementBadge.styles.js';

import normalImg from '../../assets/images/normal-type.gif';
import fireImg from '../../assets/images/fire-type.gif';
import waterImg from '../../assets/images/water-type.gif';
import electricImg from '../../assets/images/electric-type.gif';
import grassImg from '../../assets/images/grass-type.gif';
import iceImg from '../../assets/images/ice-type.gif';
import fightingImg from '../../assets/images/fighting-type.gif';
import poisonImg from '../../assets/images/poison-type.gif';
import groundImg from '../../assets/images/ground-type.gif';
import flyingImg from '../../assets/images/flying-type.gif';
import psychicImg from '../../assets/images/psychic-type.gif';
import bugImg from '../../assets/images/bug-type.gif';
import rockImg from '../../assets/images/rock-type.gif';
import ghostImg from '../../assets/images/ghost-type.gif';
import dragonImg from '../../assets/images/dragon-type.gif';
import darkImg from '../../assets/images/dark-type.gif';
import steelImg from '../../assets/images/steel-type.gif';
import fairyImg from '../../assets/images/fairy-type.gif';

const elements = {
    normal: normalImg,
    fire: fireImg,
    water: waterImg,
    electric: electricImg,
    grass: grassImg,
    ice: iceImg,
    fighting: fightingImg,
    poison: poisonImg,
    ground: groundImg,
    flying: flyingImg,
    psychic: psychicImg,
    bug: bugImg,
    rock: rockImg,
    ghost: ghostImg,
    dragon: dragonImg,
    dark: darkImg,
    steel: steelImg,
    fairy: fairyImg
};

const ElementBadge = class extends React.Component {
    render() {
        return (
            <div
                className={`${this.props.classes.ElementBadge} ${this.props.className}`}
                onClick={this.props.onClick}
            >
                <div className={this.props.classes.ElementBadge__Badge}>
                    <img
                        src={this.props.type && elements[String(this.props.type).toLowerCase()] ?
                            elements[String(this.props.type).toLowerCase()] : 'http://via.placeholder.com/200x200'}
                        alt='Unknown Type'
                    />
                </div>

                <div className={`
                    ${this.props.classes.ElementBadge__Hint}
                    ${this.props.position ? this.props.position : ''}
                `}>
                    <div>{this.props.type ? this.props.type : 'Unknown'}</div>
                </div>
            </div>
        );
    };
};

const Output = injectSheet(styles)(ElementBadge);

export { ElementBadge as Base, Output };