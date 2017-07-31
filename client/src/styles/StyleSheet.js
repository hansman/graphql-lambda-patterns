import { StyleSheet} from 'react-native';

const marginTop = 160;

export default StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    listElementContainer: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        marginTop: marginTop
    },
    entryContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listContainer: {
        marginTop: marginTop
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadmore: {
        textAlign: 'center',
        width: 300
    }
});
