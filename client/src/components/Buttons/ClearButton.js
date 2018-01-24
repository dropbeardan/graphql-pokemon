import React from 'react';
import injectSheet from 'react-jss';

import FlatButton from 'material-ui/FlatButton';

import styles from './ClearButton.styles';

const ClearButton = class extends React.Component {
    render() {
        return (
            <div
                className={`${this.props.classes.ClearButton} ${this.props.className} ${this.props.disabled ? 'disabled' : ''}`}
                onClick={this.props.onClick}
            >
                <i className='material-icons'>clear</i>
            </div>
        );
    };
};

const Output = injectSheet(styles)(ClearButton);

export { ClearButton as Base, Output };