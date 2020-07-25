import React from 'react';
import styled from 'styled-components/native';
import storage from '../net/storage';

const Title = styled.Text`
    font-size: 36px;
`;
const Button = styled.Button``;

function Component(props) {
    const [list, setList] = React.useState([]);
    React.useEffect(()=>{
        storage.readAll().then(data=>setList(data));
    },[]);
    return(
        <>
            <Title>목록</Title>

            {list.map(item=>(
                <Title key={ item.id }>{item.hashtags}</Title>
            ))}

            <Button title="조회" onPress={() => {
                props.navigation.navigate( 'View' );
            }}/>
            <Button title="신규 작성" onPress={() => {
                props.navigation.navigate( 'Form' );
            } }/>
        </>
    )
}

export default Component;