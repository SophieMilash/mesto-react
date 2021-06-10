/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import headerLogo from '../images/logo.svg';
import avatarExample from '../images/avatar-example.jpg';

function App() {
  return (
    <div className="page">
      <header className="header page__section page__section_place_header">
        <a href="#" target="_self">
          <img src={headerLogo} alt="Логотип Mesto Russia" className="header__logo" />
        </a>
      </header>
      <main className="content">
        <section className="loader">
          <div className="loader__triangle triangle-spin"></div>
        </section>

        <section className="profile page__section page__section_place_profile">
          <div className="profile__avatar-wrap">
            <img src={avatarExample} alt="аватар" className="profile__avatar" />
            <button type="button" aria-label="Редактировать" title="Редактировать" className="button profile__avatar-edit"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button type="button" aria-label="Редактировать" title="Редактировать" className="button button_action_edit profile__info-button"></button>
            <p className="profile__activity">Исследователь океана</p>
          </div>
          <button type="button" aria-label="Добавить" title="Добавить" className="button button_action_add-card profile__button"></button>
        </section>

        <section className="cards page__section page__section_place_cards"></section>
      </main>
      <footer className="footer page__section page__section_place_footer">
        <p className="footer__copyright">&copy;2021 Mesto Russia</p>
      </footer>

      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button type="button" aria-label="Закрыть" title="Закрыть" className="button popup__close-button"></button>
          <form className="form" name="edit" novalidate>
            <fieldset className="form__profile-info">
              <legend className="form__title">Редактировать профиль</legend>
              <input type="text" name="name" id="name-input" value="" minlength="2" maxlength="40" required className="form__input form__input_type_name" placeholder="Имя" />
              <span className="form__input-error name-input-error">Вы пропустили это поле.</span>
              <input type="text" name="activity" id="activity-input" value="" minlength="2" maxlength="200" required className="form__input form__input_type_activity" placeholder="О себе" />
              <span className="form__input-error activity-input-error">Вы пропустили это поле.</span>
              <button type="submit" name="submit" className="button button_action_submit form__button">
                Сохранить
                <span className="dots-loader">
                  <span className="dots-loader__dot dot-pulse">.</span>
                  <span className="dots-loader__dot dot-pulse">.</span>
                  <span className="dots-loader__dot dot-pulse">.</span>
                </span>
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_type_avatar-edit">
        <div className="popup__container">
          <button type="button" aria-label="Закрыть" title="Закрыть" className="button popup__close-button"></button>
          <form className="form" name="avatar" novalidate>
            <fieldset className="form__profile-info">
              <legend className="form__title">Обновить аватар</legend>
              <input type="url" name="avatar" id="avatar-link" value="" required className="form__input form__input_type_avatar-link" placeholder="Ссылка на картинку" />
              <span className="form__input-error avatar-link-error">Введите адрес сайта.</span>
              <button type="submit" name="submit" className="button button_action_submit form__button">
                Сохранить
                <span className="dots-loader">
                  <span className="dots-loader__dot dot-pulse">.</span>
                  <span className="dots-loader__dot dot-pulse">.</span>
                  <span className="dots-loader__dot dot-pulse">.</span>
                </span>
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add-card">
        <div className="popup__container">
          <button type="button" aria-label="Закрыть" title="Закрыть" className="button popup__close-button"></button>
          <form className="form" name="add" novalidate>
            <fieldset className="form__profile-info">
              <legend className="form__title">Новое место</legend>
              <input type="text" name="title" id="title-input" value="" minlength="2" maxlength="30" required className="form__input form__input_type_title" placeholder="Название" />
              <span className="form__input-error title-input-error">Вы пропустили это поле.</span>
              <input type="url" name="link" id="link-input" value="" required className="form__input form__input_type_link" placeholder="Ссылка на картинку" />
              <span className="form__input-error link-input-error">Введите адрес сайта.</span>
              <button type="submit" name="submit" className="button button_action_submit form__button">
                Создать
                <span className="dots-loader">
                  <span className="dots-loader__dot dot-pulse">.</span>
                  <span className="dots-loader__dot dot-pulse">.</span>
                  <span className="dots-loader__dot dot-pulse">.</span>
                </span>
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_type_image">
        <div className="popup__container popup__container_type_image">
          <button type="button" aria-label="Закрыть" title="Закрыть" className="button popup__close-button"></button>
          <figure className="popup__image-wrap">
            <img src="#" alt="Фотография" className="popup__image" />
            <figcaption className="popup__caption"></figcaption>
          </figure>
        </div>
      </div>

      <div className="popup popup_type_deletion-confirm">
        <div className="popup__container popup__container_type_deletion-confirm">
          <button type="button" aria-label="Закрыть" title="Закрыть" className="button popup__close-button"></button>
          <form className="form" name="deletion-confirm">
            <fieldset className="form__deletion-confirm">
              <legend className="form__title">Вы уверены?</legend>
              <button type="submit" name="submit" className="button button_action_submit form__button form__button_position_deletion-confirm">
                Да
                <span className="dots-loader">
                  <span className="dots-loader__dot dot-pulse">.</span>
                  <span className="dots-loader__dot dot-pulse">.</span>
                  <span className="dots-loader__dot dot-pulse">.</span>
                </span>
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
