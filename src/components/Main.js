import React from 'react';
import Loader from './Loader';
import avatarExample from '../images/avatar-example.jpg';

function Main() {

  function handleEditAvatarClick() {
    const editPopup = document.querySelector('.popup_type_avatar-edit');
    editPopup.classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    const editPopup = document.querySelector('.popup_type_edit');
    editPopup.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const editPopup = document.querySelector('.popup_type_add-card');
    editPopup.classList.add('popup_opened');
  }


  return (
    <main className="content">
      <Loader />

      <section className="profile page__section page__section_place_profile">
        <div className="profile__avatar-wrap">
          <img src={avatarExample} alt="аватар" className="profile__avatar" />
          <button type="button" aria-label="Редактировать" title="Редактировать" className="button profile__avatar-edit" onClick={handleEditAvatarClick}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button type="button" aria-label="Редактировать" title="Редактировать" className="button button_action_edit profile__info-button" onClick={handleEditProfileClick}></button>
          <p className="profile__activity">Исследователь океана</p>
        </div>
        <button type="button" aria-label="Добавить" title="Добавить" className="button button_action_add-card profile__button" onClick={handleAddPlaceClick}></button>
      </section>

      <section className="cards page__section page__section_place_cards"></section>
    </main>
  )
}

export default Main;