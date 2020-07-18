import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import Title from '../components/Title';
import ListItem from '../components/ListItem';
import MovieName from '../components/MovieName';
import fetch from '../net/fetch';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const Rank = styled.Text`
    font-size: 14px;
    color: #999999;
    margin-right: 12px;
`;

function BoxOffice(props) {
    const [list, setList] = React.useState([]);
    React.useEffect(()=>{
        // ajax 비동기 자바스크립트 XML
        fetch('https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=bbd8a6868e6ee578589f5f5efa49dd40&targetDt=20200717')
            .then( data => {
                setList( data.boxOfficeResult.dailyBoxOfficeList );
            } )
            .catch( error => {
                alert( error.message );
            } );
    },[]);
  return(
      <Container>
          <Contents>
            <Title>박스 오피스</Title>
            { list.length === 0 && (
                <ActivityIndicator size={ 'large' }/>
            ) }
            { list.map( item => (
                <ListItem key={ item.movieCd } onPress={ () => {
                    props.navigation.navigate( 'MovieDetail', { movieCd: item.movieCd } );
                } }>
                    <Rank>{ item.rank }</Rank>
                    <MovieName>{ item.movieNm }</MovieName>
                </ListItem>
            ) ) }
        </Contents>
      </Container>
  )
}

export default BoxOffice;