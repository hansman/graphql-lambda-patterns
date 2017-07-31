import config from '../config';
import * as IngressActions from '../actions/IngressActions';
import Promise from 'bluebird';
import url from 'url';

const nets = Promise.promisify(require('nets'));


export default {

    addEntry: (name) => {
        const query = {
          query: `mutation { addEntry(name: "${name}") { id name } }`
        };

        nets({
            url: url.format(config.api),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        }).then((payload) => {
            IngressActions.getEntry(JSON.parse(payload.body).data.addEntry);
        }).catch(IngressActions.handleFailed);
    },

    dropEntry: (id) => {
        const query = {
          query: `mutation { dropEntry(id: "${id}") { id } }`
        };

        nets({
            url: url.format(config.api),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        })
        .then(() => IngressActions.dropEntry(id))
        .catch(IngressActions.handleFailed);
    },

    getEntries: () => {
        const query = {
          query: "{entries { id name }}"
        };

        nets({
            url: url.format(config.api),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        }).then((payload) => {
            IngressActions.getEntries(JSON.parse(payload.body).data.entries);
        }).catch(IngressActions.handleFailed);
    },

    getEntry: (id) => {
        const query = {
          query: `{entry(id: "${id}") { id name }}`
        };

        nets({
            url: url.format(config.api),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        }).then((payload) => {
            IngressActions.getEntry(JSON.parse(payload.body).data.entry);
        }).catch(IngressActions.handleFailed);
    }

}
