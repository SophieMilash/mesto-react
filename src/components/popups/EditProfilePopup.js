import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  return (
    <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
      <input type="text" name="title" id="title-input" minLength="2" maxLength="30" required className="form__input form__input_type_title" placeholder="Название" />
      <span className="form__input-error title-input-error">Вы пропустили это поле.</span>
      <input type="url" name="link" id="link-input" required className="form__input form__input_type_link" placeholder="Ссылка на картинку" />
      <span className="form__input-error link-input-error">Введите адрес сайта.</span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
