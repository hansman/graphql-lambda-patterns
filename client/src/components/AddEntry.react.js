import React, {Component, PropTypes} from 'react';
import { Button, View } from 'react-native';
import Styles from '../styles/StyleSheet';
import { Form, InputField } from 'react-native-form-generator';
import * as EgressActions from '../actions/EgressActions';
import Entries from './Entries.react';

class AddEntry extends Component {

    static propTypes = {
        navigator: PropTypes.object.isRequired
    }

    constructor(props, context) {
        super(props, context);
        this.handleFormFocus = this.handleFormFocus.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.submitEntry = this.submitEntry.bind(this);
        this.state = {
          formData: {}
        };
    }

    handleFormFocus() {

    }

    handleFormChange(formData) {
        this.setState({formData});
    }

    submitEntry() {
        EgressActions.addEntry(this.state.formData.name);
        this.props.navigator.push({
            component: Entries,
            title: 'Entries List'
        });
    }

    render() {
        return <Form
            style={Styles.formContainer}
            ref='registrationForm'
            onFocus={this.handleFormFocus.bind(this)}
            onChange={this.handleFormChange.bind(this)}
            label='Entry'>
            <InputField
                ref='name'
                label='Name'
                placeholder='Name'/>
            <Button onPress={this.submitEntry} title='submit' />

        </Form>
    }

}


export default AddEntry;
