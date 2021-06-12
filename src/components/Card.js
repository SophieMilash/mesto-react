import React from 'react';

function Card(props) {
  return (
    <article className="card">
      <div className="card__image-wrap">
        <img src={props.card.link} alt={props.card.name} className="card__image" />
      </div>
      <button type="button" aria-label="Удалить" title="Удалить" className="button card__delete-button"></button>
      <div className="card__info">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-wrap">
          <button type="button" aria-label="Нравится" className="button card__like-button"></button>
          <p className="card__like-number">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;
