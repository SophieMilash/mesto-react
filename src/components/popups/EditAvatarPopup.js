import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  return (
    <PopupWithForm name="avatar-edit" title="Обновить аватар" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
      <input type="url" name="link" id="link-input" required className="form__input form__input_type_link" placeholder="Ссылка на картинку" />
      <span className="form__input-error link-input-error">Введите адрес сайта.</span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
