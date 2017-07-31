import React, {Component, PropTypes} from 'react';
import { Text, View } from 'react-native';
import Styles from '../styles/StyleSheet';

class Entry extends Component {

    static propTypes = {
        navigator: PropTypes.object.isRequired,
        entry: PropTypes.object.isRequired
    }

    constructor(props, context) {
        super(props, context);
    }

    render() {

        const entry = this.props.entry;
        return (<View
            style={Styles.entryContainer}
            >
            <Text>{entry.name} - {entry.id}</Text>
        </View>);
    }

}


export default Entry;
