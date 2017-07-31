import React, {Component, PropTypes} from 'react';
import { Text, View, ListView, Button } from 'react-native';
import {branch} from 'baobab-react/higher-order';
import Entypo from 'react-native-vector-icons/Entypo';
import Loading from './Loading.react';
import BaobabPropTypes from 'baobab-react/prop-types';
import StateTree from '../stores/StateTree';
import Styles from '../styles/StyleSheet';
import * as EgressActions from '../actions/EgressActions';
import _ from 'lodash';
import Entry from './Entry.react';
import AddEntry from './AddEntry.react';


class Entries extends Component {

    static propTypes = {
        navigator: PropTypes.object.isRequired
    }

    constructor(props, context) {
        super(props, context);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    getChildContext() {
        return {
            tree: StateTree
        };
    }

    dropEntry(entry) {
        EgressActions.dropEntry(entry.id);
    }

    showEntry(entry) {
        this.props.navigator.push({
          component: Entry,
          title: 'Entry',
          passProps: {entry},
        });
    }

    addEntry() {
        this.props.navigator.push({
          component: AddEntry,
          title: 'Add Entry',
          passProps: {}
        });
    }

    render() {

        const entries = _.values(this.props.entries);

        if (!Object.keys(entries).length) {
            return (<Loading />);
        }

        return <ListView
            enableEmptySections={true}
            style={Styles.listContainer}
            dataSource={this.ds.cloneWithRows(entries)}
            renderRow = {(entry) =>
                <View style={Styles.listElementContainer}>
                    <Text>{entry.name} - {entry.id.split('-')[0]}</Text>
                    <Button onPress={this.showEntry.bind(this, entry)} title='show' />
                    <Button onPress={this.dropEntry.bind(this, entry)} title='drop' />
                </View>
            }
            renderFooter={() => <Button onPress={this.addEntry.bind(this)} title='add' />}
        />;

    }

}

Entries.childContextTypes = {
    tree: BaobabPropTypes.baobab
};

export default branch({
    entries: ['entries']
}, Entries);
