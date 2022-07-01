import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {StoreProvider} from './src/utils/context';

const AppWithStore = ()=>(
    <StoreProvider>
        <App/>
    </StoreProvider>
);
AppRegistry.registerComponent(appName, () => AppWithStore);
