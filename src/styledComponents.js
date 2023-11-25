import styled from 'styled-components'

export const AppContainerUpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 50px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 45vh;
  width: 100%;
  font-family: 'Roboto';
`

export const UpperHeading = styled.h1`
  font-size: 35px;
  color: #fff;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`

export const UpperDescription = styled(UpperHeading)`
  font-size: 25px;
  margin-bottom: 1px;
`

export const AppContainerLower = styled.div`
  display: flex;
  flex-direction: column;
  height: 55vh;
  background-color: #152850;
  padding: 10px 20px;
`

export const LowerSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const LowerHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: #fff;
  font-weight: 400;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Roboto';
  width: 25%;
  margin-right: 80px;
`

export const InputElement = styled.input`
  height: 40px;
  background-color: transparent;
  width: 100%;
  border-style: solid;
  border-color: #fff;
  border-width: 1px 0px 1px 1px;
  border-radius: 7px 0px 0px 7px;
  outline: none;
  cursor: pointer;
  color: #fff;
  padding: 0px 12px;
`
export const SearchButton = styled.button`
  padding: 12px;
  height: 40px;
  background-color: transparent;
  width: 40px;
  cursor: pointer;
  outline: none;
  border-color: #fff;
  border-width: 1px 1px 1px 0px;
  border-radius: 0px 7px 7px 0px;
`

export const TrackListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  overflow-y: scroll;
`

export const NoSongsText = styled.p`
  font-size: 30px;
  color: #fff;
  font-family: 'Roboto';
  text-align: center;
  margin: auto;
`
