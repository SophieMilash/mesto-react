import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddCardPopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddCard({
      name: name,
      link: link
    });
  }

  return (
    <PopupWithForm name="add-card" title="Новое место" buttonText="Создать" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} isFormLoading={props.isFormLoading}>
      <input type="text" name="title" id="title-input" minLength="2" maxLength="30" required className="form__input form__input_type_title" placeholder="Название" onChange={handleNameChange} />
      <span className="form__input-error title-input-error">Вы пропустили это поле.</span>
      <input type="url" name="link" id="link-input" required className="form__input form__input_type_link" placeholder="Ссылка на картинку" onChange={handleLinkChange} />
      <span className="form__input-error link-input-error">Введите адрес сайта.</span>
    </PopupWithForm>
  )
}

export default AddCardPopup;
