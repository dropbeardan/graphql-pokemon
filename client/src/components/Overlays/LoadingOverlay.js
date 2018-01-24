import React from 'react';
import injectSheet from 'react-jss';

import CircularProgress from 'material-ui/CircularProgress';

import styles from './LoadingOverlay.styles.js';

const LoadingOverlay = class extends React.Component {
    render() {
        return (
            <section className={this.props.classes.LoadingOverlay}>
                <CircularProgress
                    color='rgb(90, 252, 158)'
                    size={this.props.size ? this.props.size : 80}
                    thickness={this.props.size ? Math.floor(this.props.size / 10) : 8}
                />
                <div style={{ fontSize: this.props.fontSize ? this.props.fontSize / 2 : 40, fontWeight: 'bold' }}>
                    {this.props.description}
                </div>
            </section>
        );
    };
};

const Output = injectSheet(styles)(LoadingOverlay);

export { LoadingOverlay as Base, Output };
