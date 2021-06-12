/* eslint-disable jsx-a11y/heading-has-content */
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


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddCardPopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main onEditAvatar={handleEditProfileClick} onEditProfile={handleEditAvatarClick} onAddCard={handleAddCardClick} />
      <Footer />

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <AddCardPopup isOpen={isAddCardPopupOpen} onClose={closeAllPopups} />
      <ImagePopup />
      <DeletionConfirmPopup />

      <template className="card-template">
        <article className="card">
          <div className="card__image-wrap">
            <img src="#" alt="Изображение карточки" className="card__image" />
          </div>
          <button type="button" aria-label="Удалить" title="Удалить" className="button card__delete-button"></button>
          <div className="card__info">
            <h2 className="card__title"></h2>
            <div className="card__like-wrap">
              <button type="button" aria-label="Нравится" className="button card__like-button"></button>
              <p className="card__like-number">0</p>
            </div>
          </div>
        </article>
      </template>
    </>
  );
}

export default App;
