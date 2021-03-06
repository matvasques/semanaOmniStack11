import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incidents: {
        padding: 24,
        borderRadius: 28,
        backgroundColor: '#FFF',
        marginTop: 48,
        marginBottom: 16,
    },
    
    incidentsProperty: {
        fontSize: 14,
        marginTop: 24,
        color: '#41414d',
        fontWeight: 'bold',
    },
    
    incidentsValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
    },

    contactBox: {
        padding: 24,
        borderRadius: 28,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    }
});