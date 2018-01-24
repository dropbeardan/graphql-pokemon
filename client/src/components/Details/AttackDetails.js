import React from 'react';
import injectSheet from 'react-jss';

import styles from './AttackDetails.styles.js';

import { ElementBadge } from '../Badges';

const AttackDetails = class extends React.Component {
    render() {
        return (
            <div className={this.props.classes.AttackDetails}>
                <div className={this.props.classes.AttackDetails__Name}>
                    {this.props.name}
                </div>
                <div>
                    <div className={this.props.classes.AttackDetails__Damage}>
                        {this.props.damage}
                    </div>
                    <ElementBadge
                        className={this.props.classes.AttackDetails__Type}
                        type={this.props.type}
                    />
                </div>
            </div>
        );
    };
};

const Output = injectSheet(styles)(AttackDetails);

export { AttackDetails as Base, Output };