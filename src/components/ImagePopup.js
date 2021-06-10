import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__container popup__container_type_image">
        <button type="button" aria-label="Закрыть" title="Закрыть" className="button popup__close-button"></button>
        <figure className="popup__image-wrap">
          <img src="#" alt="Фотография" className="popup__image" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;
