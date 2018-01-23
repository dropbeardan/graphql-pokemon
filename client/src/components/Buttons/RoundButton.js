import React from 'react';

import FlatButton from 'material-ui/FlatButton';

import styles from './RoundButton.styles';

const RoundButton = (props) => {
    const buttonStyle = props.style && props.style.RoundButton ?
        { ...styles.RoundButton, ...props.style.RoundButton } :
        { ...styles.RoundButton };

    const labelStyle = props.style && props.style.RoundButton__Label ?
        { ...styles.RoundButton__Label, ...props.style.RoundButton__Label } :
        { ...styles.RoundButton__Label };

    return (
        <FlatButton
            {...props}
            style={buttonStyle}
            labelStyle={labelStyle}
        />
    );
};

export default RoundButton;