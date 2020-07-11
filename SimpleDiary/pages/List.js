import React from 'react';
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';

const ListItem = styled.TouchableOpacity`
    width: 100%;
    padding: 12px 0;
    border-bottom-color: #aaaaaa;
    border-bottom-width: 1px;
`;
const Label = styled.Text`
    font-size: 20px;
`;

// 구조 분해 할당, Destructuring Assignment
function List( { navigation } ) {
    const [ list, setList ] = React.useState( [] );
    const load = async () => {
        const data = await AsyncStorage.getItem( 'list' );
        if( data !== null ) {
            setList( JSON.parse( data ) );
        }
    }
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            load();
        });

        load();
        return unsubscribe;
      }, [navigation]);
    return (
        <Container>
            <Contents>
                {list.map( item => {
                    return (
                        <ListItem key={ item.date }
                            onPress={ () => navigation.navigate( 'Detail' ) }
                        >
                            <Label>{item.date}</Label>
                        </ListItem>
                    )
                })}
            </Contents>
            <Button onPress={ ()=> navigation.navigate( 'Form' ) }>
                새 일기 작성
            </Button>
        </Container>
    )
}

export default List;