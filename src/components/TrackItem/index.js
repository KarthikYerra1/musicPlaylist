import {AiOutlineDelete} from 'react-icons/ai'

import {
  ListItemContainer,
  DetailsContainer,
  ThumbnailImage,
  NameAndGenreContainer,
  TitleHeading,
  GenreType,
  Duration,
  DeleteButton,
} from './styledComponents'

const TrackItem = props => {
  const {details, onClickedDelete} = props
  const {id, imageUrl, name, genre, duration} = details

  const onClickButton = () => {
    onClickedDelete(id)
  }

  return (
    <ListItemContainer>
      <DetailsContainer>
        <ThumbnailImage alt="track" src={imageUrl} />
        <NameAndGenreContainer>
          <TitleHeading>{name}</TitleHeading>
          <GenreType>{genre}</GenreType>
        </NameAndGenreContainer>
      </DetailsContainer>
      <DetailsContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          data-testid="delete"
          type="button"
          onClick={onClickButton}
        >
          <AiOutlineDelete size={20} color="#fff" />
        </DeleteButton>
      </DetailsContainer>
    </ListItemContainer>
  )
}

export default TrackItem
