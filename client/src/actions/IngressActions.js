import StateTree from '../stores/StateTree';

const entriesCursor = StateTree.select('entries');
const fetchCursor = StateTree.select('fetch');

export function getEntry(entry) {
    fetchCursor.set(['pending'], false);
    fetchCursor.set(['failed'], false);
    entriesCursor.set([entry.id], entry);
    StateTree.commit();
}

export function getEntries(entries) {
    console.log('entries', entries);
    fetchCursor.set(['pending'], false);
    fetchCursor.set(['failed'], false);
    entries.forEach(getEntry);
}

export function dropEntry(id) {
    fetchCursor.set(['pending'], false);
    fetchCursor.set(['failed'], false);
    entriesCursor.unset([id]);
    StateTree.commit();
}
