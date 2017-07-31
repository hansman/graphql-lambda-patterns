import config from '../config';
import * as EgressActions from '../actions/EgressActions';
import React, {Component} from 'react';
import Styles from '../styles/StyleSheet';
import { Button, Text, View } from 'react-native';
import {branch} from 'baobab-react/higher-order';

class Loading extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            noEntries: false
        };
    }

    componentWillMount() {
        EgressActions.getEntries();
        this.timeout = setTimeout(() => {
            /*
             * If there are no new cards with in {config.noMoreCardsTimeout}
             * ms, either because the request times out or every
             * request returns an empty array of cards, inform
             * the user that there are no new cards in the moment.
             */
            this.setState({noEntries: true});
        }, config.noEntriesTimeout);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    onPress() {
        EgressActions.getEntries();
    }

    render() {

        if ((this.props.fetchFailed && !this.props.pending) || this.state.noEntries) {
            return (
                <View style={Styles.loading}>
                    <Text style={Styles.loadmore}>There are no entries in the moment.</Text>
                    <Button
                        onPress={this.onPress}
                        title='load entries'
                    />
                </View>
            );
        }

        return (
            <View style={Styles.loading}>
                <Text>Loading entries...</Text>
            </View>
        );
    }

}

export default branch({
    fetchFailed: ['fetch', 'failed'],
    pending:  ['fetch', 'pending']
}, Loading);
