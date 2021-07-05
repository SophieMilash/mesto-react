import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const inputRef = React.useRef();
  const [avatar, setAvatar] = React.useState('');
  const [avatarValidityError, setAvatarValidityError] = React.useState('');
  const isSubmitDisabled = avatarValidityError;

  function handleAvatarChange(e) {
    const avatarInput = e.target;
    const { value, validity, validationMessage } = avatarInput;
    setAvatar(value);

    if (validity.valueMissing) {
      setAvatarValidityError('Вы пропустили это поле');
    } else if (validity.typeMismatch) {
      setAvatarValidityError('Введите адрес сайта');
    } else {
      setAvatarValidityError(validationMessage);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: inputRef.current.value
    });
  }

  return (
    <PopupWithForm name="avatar-edit" title="Обновить аватар" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} isFormLoading={props.isFormLoading} isSubmitDisabled={isSubmitDisabled} >
      <input type="url" name="link" id="avatar-link" required className="form__input" placeholder="Ссылка на картинку" ref={inputRef} value={avatar} onChange={handleAvatarChange} />
      {avatarValidityError && <span className="form__input-error form__input-error_active avatar-link-error">{avatarValidityError}</span>}
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
