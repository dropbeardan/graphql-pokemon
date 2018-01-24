import React from 'react';
import injectSheet from 'react-jss';

import styles from './Details.styles.js';

import { ClearButton, InfoButton } from '../Buttons';
import { ElementBadge } from '../Badges';
import { AttackDetails, InfoDetails } from './index';

import Pokemon404 from '../../assets/images/pokemon404.jpg';

const Details = class extends React.Component {
    render() {
        const pokemon = this.props.pokemon ? this.props.pokemon : {};

        return (
            <section className={this.props.classes.Details}>
                <div className={this.props.classes.Details__Header}>
                    <ClearButton
                        className={this.props.classes.Details__Close}
                        onClick={this.props.onClose}
                    />
                </div>
                <div className={this.props.classes.Details__Evolution}>
                    <img src={pokemon.image ? pokemon.image : Pokemon404} alt='Not Available' />
                </div>
                <div className={this.props.classes.Details__Stats}>
                    <div>
                        <div className={this.props.classes.Details__Title}>Bio</div>
                        <div className={this.props.classes.Details__Info}>
                            <InfoDetails
                                label='Name'
                                value={pokemon.name ? pokemon.name : 'Unknown'}
                            />
                            <InfoDetails
                                label='Type'
                                value={pokemon.type ? pokemon.type : 'Unknown'}
                            />
                            <InfoDetails
                                label='Weight'
                                value={pokemon.weight ? `${pokemon.weight.minimum} ${pokemon.weight.maximum}` : 'Unknown'}
                            />
                            <InfoDetails
                                label='Height'
                                value={pokemon.height ? `${pokemon.height.minimum} ${pokemon.height.maximum}` : 'Unknown'}
                            />
                            <InfoDetails
                                label='Flee Rate'
                                value={pokemon.fleeRate ? `${Math.round(pokemon.fleeRate * 100)}%` : 'Unknown'}
                            />
                        </div>
                    </div>

                    <div>
                        <div className={this.props.classes.Details__Title}>Power</div>
                        <div className={this.props.classes.Details__Info}>
                            <InfoDetails
                                label='HP'
                                value={pokemon.maxHP ? pokemon.maxHP : 'Unknown'}
                            />
                            <InfoDetails
                                label='CP'
                                value={pokemon.maxCP ? pokemon.maxCP : 'Unknown'}
                            />
                        </div>
                        <div className={this.props.classes.Details__Title}>Attacks</div>
                        <div className={this.props.classes.Details__Info}>
                            {
                                pokemon.attacks && pokemon.attacks.fast ?
                                    pokemon.attacks.fast.map((attack) => {
                                        return (
                                            <AttackDetails
                                                key={attack.name}
                                                name={attack.name}
                                                damage={attack.damage}
                                                type={attack.type}
                                            />
                                        );
                                    }) : 'No Attacks'
                            }
                        </div>
                        <div className={this.props.classes.Details__Title}>Special Attacks</div>
                        <div className={this.props.classes.Details__Info}>
                            {
                                pokemon.attacks && pokemon.attacks.special ?
                                    pokemon.attacks.special.map((attack) => {
                                        return (
                                            <AttackDetails
                                                key={attack.name}
                                                name={attack.name}
                                                damage={attack.damage}
                                                type={attack.type}
                                            />
                                        );
                                    }) : 'No Special Attacks'
                            }
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className={this.props.classes.Details__Title}>
                                <span>Weaknesses</span>
                                <InfoButton
                                    hint={`
                                        ${this.props.name ? this.props.name : 'Unknown'}
                                        takes extra damage from attacks of the following elements.
                                    `}
                                    alignment='left'
                                />
                            </div>
                            <div className={this.props.classes.Details__List}>
                                {
                                    pokemon.weaknesses ?
                                        pokemon.weaknesses.map((weakness) => {
                                            return (
                                                <ElementBadge
                                                    key={weakness}
                                                    className={this.props.classes.Details__ElemType}
                                                    type={weakness}
                                                />
                                            );
                                        }) : 'No Weaknesses'
                                }
                            </div>
                        </div>
                        <div>
                            <div className={this.props.classes.Details__Title}>
                                <span>Resistance</span>
                                <InfoButton
                                    hint={`
                                        ${pokemon.name ? pokemon.name : 'Unknown'}
                                        takes reduced damage from attacks of the following elements.
                                    `}
                                    alignment='left'
                                />
                            </div>
                            <div className={this.props.classes.Details__List}>
                                {
                                    pokemon.resistances ?
                                        pokemon.resistances.map((resistance) => {
                                            return (
                                                <ElementBadge
                                                    key={resistance}
                                                    className={this.props.classes.Details__ElemType}
                                                    type={resistance}
                                                />
                                            );
                                        }) : 'No Resistances'
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};

const Output = injectSheet(styles)(Details);

export { Details as Base, Output };