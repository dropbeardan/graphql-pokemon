import React from 'react';
import injectSheet from 'react-jss';

import TextField from 'material-ui/TextField';

import styles from './SearchField.styles.js';

const SearchField = class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.changeField = this.changeField.bind(this);
        this.clearField = this.clearField.bind(this);
    };

    changeField = (fn) => {
        return (event) => {
            this.setState({
                ...this.state,
                value: event.target.value
            });

            if (fn) {
                fn(event.target.value);
            }
        };
    };

    clearField = (fn) => {
        return (event) => {
            this.setState({
                ...this.state,
                value: ''
            });

            if (fn) {
                fn('');
            }
        };
    };

    render() {
        return (
            <div className={this.props.classes.SearchField}>
                <TextField
                    {...this.props}
                    className={this.props.classes.SearchField__Input}
                    value={this.state.value}
                    onChange={this.changeField(this.props.onChange)}
                />
                <div
                    className={`${this.props.classes.SearchField__Clear} ${this.state.value ? '' : 'disabled'}`}
                    onClick={this.clearField(this.props.onChange)}
                >
                    <i className='material-icons'>clear</i>
                </div>
            </div>
        );
    };
};

const Output = injectSheet(styles)(SearchField);

export { SearchField as Base, Output };