import React from 'react';
import Container from '../components/Container';
import Contents from '../components/Contents';
import styled from 'styled-components/native';

const Text = styled.Text`
    font-size: 20px;
    line-height: 28px;
`;

function Detail( { navigation } ) {
    return (
        <Container>
            <Contents>
                <Text>{`Lorem Ipsum Dolar Sit Amet...`}</Text>
            </Contents>
        </Container>
    )
}

export default Detail;