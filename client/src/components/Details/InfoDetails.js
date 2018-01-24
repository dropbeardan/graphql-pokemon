import React from 'react';
import injectSheet from 'react-jss';

import styles from './InfoDetails.styles.js';

const InfoDetails = class extends React.Component {
    render() {
        return (
            <div className={this.props.classes.InfoDetails}>
                <span className={this.props.classes.InfoDetails__Label}>
                    {this.props.label}
                </span>
                <span className={this.props.classes.InfoDetails__Value}>
                    {this.props.value}
                </span>
            </div>
        );
    };
};

const Output = injectSheet(styles)(InfoDetails);

export { InfoDetails as Base, Output };