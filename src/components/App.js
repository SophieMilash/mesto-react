/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import ImagePopup from './ImagePopup';

import DotsLoader from './DotsLoader';


function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button type="button" aria-label="Закрыть" title="Закрыть" className="button popup__close-button"></button>
          <form className="form" name="edit" noValidate>
            <fieldset className="form__profile-info">
              <legend className="form__title">Редактировать профиль</legend>
              <input type="text" name="name" id="name-input" defaultValue minLength="2" maxLength="40" required className="form__input form__input_type_name" placeholder="Имя" />
              <span className="form__input-error name-input-error">Вы пропустили это поле.</span>
              <input type="text" name="activity" id="activity-input" defaultValue minLength="2" maxLength="200" required className="form__input form__input_type_activity" placeholder="О себе" />
              <span className="form__input-error activity-input-error">Вы пропустили это поле.</span>
              <button type="submit" name="submit" className="button button_action_submit form__button">
                Сохранить
                <DotsLoader />
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_type_avatar-edit">
        <div className="popup__container">
          <button type="button" aria-label="Закрыть" title="Закрыть" className="button popup__close-button"></button>
          <form className="form" name="avatar" noValidate>
            <fieldset className="form__profile-info">
              <legend className="form__title">Обновить аватар</legend>
              <input type="url" name="avatar" id="avatar-link" defaultValue required className="form__input form__input_type_avatar-link" placeholder="Ссылка на картинку" />
              <span className="form__input-error avatar-link-error">Введите адрес сайта.</span>
              <button type="submit" name="submit" className="button button_action_submit form__button">
                Сохранить
                <DotsLoader />
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add-card">
        <div className="popup__container">
          <button type="button" aria-label="Закрыть" title="Закрыть" className="button popup__close-button"></button>
          <form className="form" name="add" noValidate>
            <fieldset className="form__profile-info">
              <legend className="form__title">Новое место</legend>
              <input type="text" name="title" id="title-input" defaultValue minLength="2" maxLength="30" required className="form__input form__input_type_title" placeholder="Название" />
              <span className="form__input-error title-input-error">Вы пропустили это поле.</span>
              <input type="url" name="link" id="link-input" defaultValue required className="form__input form__input_type_link" placeholder="Ссылка на картинку" />
              <span className="form__input-error link-input-error">Введите адрес сайта.</span>
              <button type="submit" name="submit" className="button button_action_submit form__button">
                Создать
                <DotsLoader />
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <ImagePopup />

      <div className="popup popup_type_deletion-confirm">
        <div className="popup__container popup__container_type_deletion-confirm">
          <button type="button" aria-label="Закрыть" title="Закрыть" className="button popup__close-button"></button>
          <form className="form" name="deletion-confirm">
            <fieldset className="form__deletion-confirm">
              <legend className="form__title">Вы уверены?</legend>
              <button type="submit" name="submit" className="button button_action_submit form__button form__button_position_deletion-confirm">
                Да
                <DotsLoader />
              </button>
            </fieldset>
          </form>
        </div>
      </div>

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
