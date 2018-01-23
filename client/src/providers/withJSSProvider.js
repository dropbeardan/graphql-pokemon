import React from 'react';
import { JssProvider, jss } from 'react-jss';

const provider = (children) => {
    return (
        <JssProvider jss={jss}>
            {children}
        </JssProvider>
    );
};

export default provider;