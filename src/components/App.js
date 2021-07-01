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
  const [isFormLoading, setIsFormLoading] = React.useState(false);

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

  // закрытие попапов по Esc
  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, []);

  // закрытие попапов кликом по оверлею
  React.useEffect(() => {
    function handleOverlayClose(evt) {
      if (evt.target.classList.contains('popup_opened')) {
        closeAllPopups();
      }
    }
    document.addEventListener('click', handleOverlayClose);

    return () => {
      document.removeEventListener('click', handleOverlayClose);
    };
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

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardDelete() {
    setDeletionConfirmPopup(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddCardPopupOpen(false);
    setDeletionConfirmPopup(false);
    setSelectedCard(null);
  }

  function handleUpdateUser({ name, about }) {
    setIsFormLoading(true);
    api.setUserInfo({ name, about })
      .then((data) => {
        setCurrentUser({
          name: name,
          about: about,
          avatar: data.avatar
        })
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsFormLoading(false));
  }

  function handleUpdateAvatar({ avatar }) {
    setIsFormLoading(true);
    api.setAvatar({ avatar })
      .then((data) => {
        setCurrentUser({
          name: data.name,
          about: data.about,
          avatar: avatar
        });
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsFormLoading(false));
  }

  function handleAddCardSubmit({ name, link }) {
    setIsFormLoading(true);
    api.addCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsFormLoading(false));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => c._id === card._id ? newCard : c)
        );
      });
  }

  function handleDeletionConfirmClick() {
    setIsFormLoading(true);
    api.deleteCard(cardDelete._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== cardDelete._id));
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsFormLoading(false));
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddCard={handleAddCardClick} onCardClick={handleCardClick} cards={cards} isLoading={isLoading} onCardLike={handleCardLike} onCardDelete={handleCardDelete} setCardDelete={setCardDelete}/>
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} isFormLoading={isFormLoading} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} isFormLoading={isFormLoading}/>
        <AddCardPopup isOpen={isAddCardPopupOpen} onClose={closeAllPopups} onAddCard={handleAddCardSubmit} isFormLoading={isFormLoading} />
        <ImagePopup card={selectedCard !== null && selectedCard} onClose={closeAllPopups} />
        <DeletionConfirmPopup isOpen={isDeletionConfirmPopup} onClose={closeAllPopups} onConfirmDeletion={handleDeletionConfirmClick} isFormLoading={isFormLoading}/>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
