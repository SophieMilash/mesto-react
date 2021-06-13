import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import EditProfilePopup from './popups/EditProfilePopup';
import EditAvatarPopup from './popups/EditAvatarPopup';
import AddCardPopup from './popups/AddCardPopup';
import ImagePopup from './popups/ImagePopup';
import DeletionConfirmPopup from './popups/DeletionConfirmPopup';


function App() {
  const RU_LANG = 'ru';
  document.documentElement.lang = RU_LANG;
  document.title = 'Mesto';
  document.body.classList.add('page');

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

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

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddCardPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <>
      <Header />
      <Main onEditAvatar={handleEditProfileClick} onEditProfile={handleEditAvatarClick} onAddCard={handleAddCardClick} onCardClick={handleCardClick} />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <AddCardPopup isOpen={isAddCardPopupOpen} onClose={closeAllPopups} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <DeletionConfirmPopup />
    </>
  );
}

export default App;
