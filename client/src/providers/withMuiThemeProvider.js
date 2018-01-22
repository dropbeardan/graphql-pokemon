import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const provider = (children) => {
    return (
        <MuiThemeProvider>
            {children}
        </MuiThemeProvider>
    );
};

export default provider;