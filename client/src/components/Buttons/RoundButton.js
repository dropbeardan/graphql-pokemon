import React from 'react';

import FlatButton from 'material-ui/FlatButton';

import styles from './RoundButton.styles';

const RoundButton = class extends React.Component {

    constructor(props) {
        super(props);

        this.buttonStyle = props.style && props.style.RoundButton ?
            { ...styles.RoundButton, ...props.style.RoundButton } :
            { ...styles.RoundButton };

        this.labelStyle = props.style && props.style.RoundButton__Label ?
            { ...styles.RoundButton__Label, ...props.style.RoundButton__Label } :
            { ...styles.RoundButton__Label };
    };

    render() {
        return (
            <FlatButton
                {...this.props}
                style={this.buttonStyle}
                labelStyle={this.labelStyle}
            />
        );
    };
};

export default RoundButton;