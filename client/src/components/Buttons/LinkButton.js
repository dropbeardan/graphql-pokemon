import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';

import FlatButton from 'material-ui/FlatButton';

import styles from './LinkButton.styles';

const LinkButton = (props) => {
    const buttonClass = props.class && props.class.button ? props.class.button : null;

    const buttonStyle = props.style && props.style.LinkButton ?
        { ...styles.LinkButton, ...props.style.className.LinkButton } :
        { ...styles.LinkButton };

    const labelStyle = props.style && props.style.LinkButton__label ?
        { ...styles.LinkButton__label, ...props.style.LinkButton__label } :
        { ...styles.LinkButton__label };

    return (
        <Link to={props.url}>
            <FlatButton
                className={buttonClass}
                disabled={props.disabled}
                label={props.label}
                style={buttonStyle}
                labelStyle={labelStyle}
                hoverColor={props.hoverColor}
                rippleColor={props.rippleColor}
            />
        </Link>
    );
};

export default injectSheet(styles)(LinkButton);