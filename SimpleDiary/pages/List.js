import React from 'react';
import { Button, Text, View } from 'react-native';

// 구조 분해 할당, Destructuring Assignment
function List( { navigation } ) {
    return (
        <View>
            <Text>List</Text>
            <Button
                title="디테일 페이지로"
                onPress={ () =>  navigation.navigate( "Detail" ) }
            />
            <Button
                title="작성 페이지로"
                onPress={ () =>  navigation.navigate( "Form" ) }
            />
        </View>
    )
}

export default List;