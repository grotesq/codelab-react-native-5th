import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const Contents = styled.ScrollView`
  flex: 1;
  padding: 8px 24px;
`;
const TodoItem = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TodoItemText = styled.Text`
  font-size: 20px;
  flex: 1;
`;
const TodoItemButton = styled.Button``;
const InputContainer = styled.View`
  flex-direction: row;
  padding: 8px 24px;
`;
const Input = styled.TextInput`
  border: 1px solid #e5e5e5;
  flex: 1;
`;
const Button = styled.Button``;
const TempText = styled.Text`
  font-size: 20px;
  margin-bottom: 12px;
`;

export default function App() {
  return (
    <Container>
      <Contents>
        <TodoItem>
          <TodoItemText>
            할 일 목록 표시
          </TodoItemText>
          <TodoItemButton title="삭제" onPress={ () => {} }/>
        </TodoItem>
        <TodoItem>
          <TodoItemText>
            할 일 목록 2 표시
          </TodoItemText>
          <TodoItemButton title="삭제" onPress={ () => {} }/>
        </TodoItem>
        <TodoItem>
          <TodoItemText>
            할 일 목록 3 표시
          </TodoItemText>
          <TodoItemButton title="삭제" onPress={ () => {} }/>
        </TodoItem>
      </Contents>
      <InputContainer>
        <Input/>
        <Button title="전송" onPress={ () => {} }/>
      </InputContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
