import React from 'react';
import injectSheet from 'react-jss';

import FloatingActionButton from 'material-ui/FloatingActionButton';

import styles from './ElementBadge.styles.js';

const elements = {
    normal: { src: '' },
    fire: { src: '' },
    water: { src: '' },
    electric: { src: '' },
    grass: { src: '' },
    ice: { src: '' },
    fighting: { src: '' },
    poison: { src: '' },
    ground: { src: '' },
    flying: { src: '' },
    psychic: { src: '' },
    bug: { src: '' },
    rock: { src: '' },
    ghost: { src: '' },
    dragon: { src: '' },
    dark: { src: '' },
    steel: { src: '' },
    fairy: { src: '' },
};

const ElementBadge = class extends React.Component {
    render() {
        return (
            <div
                className={this.props.classes.ElementBadge}
                onClick={this.props.onClick}
            >
                <div className={this.props.classes.ElementBadge__Badge}>
                    <img
                        src={this.props.type && elements[this.props.type] ?
                            elements[this.props.type].src : 'http://via.placeholder.com/200x200'}
                        alt='Unknown Type'
                    />
                </div>

                <div className={`${this.props.classes.ElementBadge__Hint} ${this.props.position ? this.props.position : ''}`}>
                    <div className='title'>{this.props.type ? this.props.type : 'Unknown'}</div>
                </div>
            </div>
        );
    };
};

export default injectSheet(styles)(ElementBadge);