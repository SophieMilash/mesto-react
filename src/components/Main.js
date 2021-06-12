import React from 'react';
import Loader from './Loader';
import api from '../utils/Api';

function Main(props) {
  const [userName, setuserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  Promise.all([
    api.getUserInfo(),
    api.getInitialCards()
  ])
    .then(([userData, cards]) => {
      setuserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    })
    .catch((err) => console.log(err))


  return (
    <main className="content">
      <Loader />

      <section className="profile page__section page__section_place_profile">
        <div className="profile__avatar-wrap">
          <img src={userAvatar} alt="аватар" className="profile__avatar" />
          <button type="button" aria-label="Редактировать" title="Редактировать" className="button profile__avatar-edit" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" aria-label="Редактировать" title="Редактировать" className="button button_action_edit profile__info-button" onClick={props.onEditProfile}></button>
          <p className="profile__activity">{userDescription}</p>
        </div>
        <button type="button" aria-label="Добавить" title="Добавить" className="button button_action_add-card profile__button" onClick={props.onAddCard}></button>
      </section>

      <section className="cards page__section page__section_place_cards"></section>
    </main>
  )
}

export default Main;
