import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import EditProfilePopup from './popups/EditProfilePopup';
import EditAvatarPopup from './popups/EditAvatarPopup';
import AddCardPopup from './popups/AddCardPopup';
import ImagePopup from './popups/ImagePopup';
import DeletionConfirmPopup from './popups/DeletionConfirmPopup';
import CurrentUserContext from '../contexts/CurrentUserContext';
import api from '../utils/Api';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [isDeletionConfirmPopup, setDeletionConfirmPopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    about: '',
    avatar: ''
  });
  const [cards, setCards] = React.useState([]);
  const [cardDelete, setCardDelete] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);

    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()
    ])
      .then(([userData, cards]) => {
        setCurrentUser(userData);
        setCards(cards);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  function handleDeletionConfirmClick() {
    api
      .deleteCard(cardDelete._id)
      .then(setCards((state) => {
        state.filter((c) => c._id !== cardDelete._id);
        closeAllPopups();
      }));
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddCardPopupOpen(false);
    setDeletionConfirmPopup(false);
    setSelectedCard(null);
  }

  function handleUpdateUser({ name, about }) {
    api.setUserInfo({ name, about })
      .then((data) => {
        setCurrentUser({
          name: name,
          about: about,
          avatar: data.avatar
        });
        closeAllPopups();
      });
  }

  function handleUpdateAvatar({ avatar }) {
    api.setAvatar({ avatar })
    .then((data) => {
      setCurrentUser({
        name: data.name,
        about: data.about,
        avatar: avatar
      });
      closeAllPopups();
    });
  }

  function handleAddCardSubmit({ name, link }) {
    api.addCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => c._id === card._id ? newCard : c)
        );
      });
  }

  function handleCardDelete() {
    setDeletionConfirmPopup(true);
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddCard={handleAddCardClick} onCardClick={handleCardClick} cards={cards} isLoading={isLoading} onCardLike={handleCardLike} onCardDelete={handleCardDelete} setCardDelete={setCardDelete}/>
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <AddCardPopup isOpen={isAddCardPopupOpen} onClose={closeAllPopups} onAddCard={handleAddCardSubmit} />
        <ImagePopup card={selectedCard !== null && selectedCard} onClose={closeAllPopups} />
        <DeletionConfirmPopup isOpen={isDeletionConfirmPopup} onClose={closeAllPopups} onConfirmDeletion={handleDeletionConfirmClick}/>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
