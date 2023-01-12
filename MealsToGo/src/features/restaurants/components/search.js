import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { useContext, useState, useEffect } from 'react';
import { LocationContext } from '../../../services/location/location.context';


const SearchContainer = styled.View`
padding: ${({ theme }) => theme.space[3]};
`;

export const Search = () => {

  const { keyword, search } = useContext(LocationContext)
  const [searchKeyword, setSearchKeyword] = useState(keyword)


  return (
    <SearchContainer>
      <Searchbar onSubmitEditing={() => {
        search(searchKeyword)
      }}
        onChangeText={(text) => {
          setSearchKeyword(text)
        }}
        placeholder='Search for a location'
        value={searchKeyword} />
    </SearchContainer>
  )
}
