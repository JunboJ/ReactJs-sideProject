import React from 'react';

// context value could be any data types
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;