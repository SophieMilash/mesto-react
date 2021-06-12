import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  return (
    <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
      <input type="text" name="name" id="name-input" defaultValue minLength="2" maxLength="40" required className="form__input form__input_type_name" placeholder="Имя" />
      <span className="form__input-error name-input-error">Вы пропустили это поле.</span>
      <input type="text" name="activity" id="activity-input" defaultValue minLength="2" maxLength="200" required className="form__input form__input_type_activity" placeholder="О себе" />
      <span className="form__input-error activity-input-error">Вы пропустили это поле.</span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
