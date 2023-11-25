import styled from 'styled-components'

export const ListItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-color: transparent;
  margin: 10px 70px 10px 60px;
  width: 80%;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ThumbnailImage = styled.img`
  height: 80px;
  width: 120px;
`

export const NameAndGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  margin-left: 10px;
  padding-top: 10px;
`

export const TitleHeading = styled.p`
  font-size: 18px;
  color: #fff;
  margin: 0px;
  padding: 0px;
  margin-bottom: 5px;
`

export const GenreType = styled.p`
  font-size: 15px;
  color: #3b82f6;
`
export const Duration = styled.p`
  font-size: 15px;
  color: #fff;
  margin-right: 50px;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  text-align: center;
  padding: 10px;
  margin-top: 5px;
`
