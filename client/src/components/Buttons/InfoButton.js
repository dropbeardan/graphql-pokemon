import React from 'react';
import injectSheet from 'react-jss';

import styles from './InfoButton.styles';

const InfoButton = class extends React.Component {
    render() {
        return (
            <div className={this.props.classes.InfoButton}>
                <i className={`material-icons ${this.props.classes.InfoButton__Icon} ${this.props.disabled ? 'disabled' : ''}`}>
                    info_outline
                </i>

                <div className={`
                    ${this.props.classes.InfoButton__Hint}
                    ${!this.props.hint || this.props.disabled ? 'disabled' : ''}
                    ${this.props.alignment}
                `}>
                    {this.props.hint}
                </div>
            </div>
        );
    };
};

const Output = injectSheet(styles)(InfoButton);

export { InfoButton as Base, Output };