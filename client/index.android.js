import React, {Component} from 'react';
import {AppRegistry, View, NavigatorIOS} from 'react-native';
import Entries from './src/components/Entries.react';
import PropTypes from 'baobab-react/prop-types';
import {root} from 'baobab-react/higher-order';
import StateTree from './src/stores/StateTree';
import Styles from './src/styles/StyleSheet';
import * as EgressActions from './src/actions/EgressActions';

export default class EntriesLambda extends Component {

    componentWillMount() {
        console.disableYellowBox = true;
        EgressActions.getEntries();
    }

    getChildContext() {
        return {
            tree: StateTree
        };
    }

    render() {
        return (
            <NavigatorIOS
                style={Styles.app}
                initialRoute={{
                    component: Entries,
                    title: 'Entries List'
                }}
            />
        );
    }

}

EntriesLambda.childContextTypes = {
    tree: PropTypes.baobab
};

AppRegistry.registerComponent('entrieslambda', () => root(StateTree, EntriesLambda));
