/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import EditProfilePopup from './popups/EditProfilePopup';
import AvatarEditPopup from './popups/AvatarEditPopup';
import AddCardPopup from './popups/AddCardPopup';
import ImagePopup from './popups/ImagePopup';
import PopupWithForm from './popups/PopupWithForm';


function App() {
  const RU_LANG = 'ru';

  document.documentElement.lang = RU_LANG;
  document.title = 'Mesto';


  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <EditProfilePopup />
      <AvatarEditPopup />
      <AddCardPopup />
      <ImagePopup />
      <PopupWithForm />

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
    </div>
  );
}

export default App;
