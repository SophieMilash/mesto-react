import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../../contexts/CurrentUserContext';
// import Input from '../Input';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description
    });
  }

  return (
    <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} isFormLoading={props.isFormLoading}>
      <input type="text" name="name" id="name-input" minLength="2" maxLength="40" required className="form__input form__input_type_name" placeholder="Имя" value={name} onChange={handleNameChange} />
      <span className="form__input-error name-input-error">Вы пропустили это поле.</span>
      <input type="text" name="activity" id="activity-input" minLength="2" maxLength="200" required className="form__input form__input_type_activity" placeholder="О себе" value={description} onChange={handleDescriptionChange} />
      <span className="form__input-error activity-input-error">Вы пропустили это поле.</span>

      {/* <Input type="text" name="userName" placeholder="Имя" maxLength="40" /> */}

    </PopupWithForm>
  )
}

export default EditProfilePopup;
