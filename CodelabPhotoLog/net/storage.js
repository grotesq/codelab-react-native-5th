import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

const KEY = 'photo-logs';

async function read( key ) {
    const data = await AsyncStorage.getItem( key );
    let json = [];
    if( data !== null ) {
        json = JSON.parse( data );
    }
    return json;
}

async function store( key, value ) {
    await AsyncStorage.setItem( key, value );
}

async function readAll() {
    return await read( KEY );
}

async function readById( id ) {
    const data = await read( KEY );
    return _.find( data, element => element.id === id );
}

async function append( values ) {
    const data = await read( KEY );
    data.push( {
        ...values,
        id: new Date().getTime().toString(),
    } );
    return await store( KEY, JSON.stringify( data ) );
}

export default {
    read,
    store,
    readAll,
    readById,
    append,
}