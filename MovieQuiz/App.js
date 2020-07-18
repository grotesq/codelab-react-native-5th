/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from 'styled-components/native';
import movieList from './movieList';
import _ from 'lodash';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const Contents = styled.View`
  flex: 1;
  padding: 24px;
`;
const Quiz = styled.Text`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;
const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #cc0000;
  justify-content: center;
  align-items: center;
`;
const Label = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
`;

function getInitials(string) {
  return string
    .split('')
    .map(char => {
      const index = (char.charCodeAt(0) - 44032) / 28 / 21;
      if (index >= 0) return String.fromCharCode(index + 4352);
      return char;
    })
    .join('');
}

const App: () => React$Node = () => {
  const [ quizList, setQuizList ] = React.useState(_.shuffle(movieList));
  const [ mode, setMode ] = React.useState( 'quiz' ); // quiz or answer
  const onPress = React.useCallback( () => {
    if( mode === 'answer' ) {
      setQuizList( quizList.slice( 1 ) );
    }
    setMode( mode === 'quiz' ? 'answer' : 'quiz' );
  }, [ mode ] );
  const retry = React.useCallback( ()=>{
    setQuizList(_.shuffle(movieList));
    setMode( 'quiz' );
  }, [ quizList ] );
  return (
    <>
      <Container>
        <Contents>
          { quizList.length ? (
            <Quiz>{mode === 'quiz' ? getInitials( quizList[0] ) : quizList[0]}</Quiz>
          ) : (
            <Quiz>퀴즈 끝</Quiz>
          )}
          
        </Contents>
        {quizList.length ? (
          <Button onPress={ onPress }>
            <Label>{ mode === 'quiz' ? '정답 확인' : '다음' }</Label>
          </Button>
        ) : (
          <Button onPress={ retry }>
            <Label>처음부터 다시 시작</Label>
          </Button>
        )}
      </Container>
    </>
  );
};

export default App;
