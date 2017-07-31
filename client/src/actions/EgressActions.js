import EntriesAdapter from '../adapters/EntriesAdapter'
import StateTree from '../stores/StateTree';

const fetchCursor = StateTree.select('fetch');

export function dropEntry(id) {
    const fetch = fetchCursor.get();
    if (fetch.pending) {
        return;
    }
    EntriesAdapter.dropEntry(id);
    fetchCursor.set(['pending'], true);
    StateTree.commit();
}

export function getEntries() {
	EntriesAdapter.getEntries();
}

export function addEntry(name) {
	EntriesAdapter.addEntry(name);
}
