import React from 'react';
import './itemCard.css'

export default function ItemCard({ imgSrc, imgAlt, title, detail, buttonText, link }) {
    return (
      <div className="card-container">
        {imgSrc && imgAlt && (<img className="card-image" src={imgSrc} alt={imgAlt} />)}
        {title && <h1 className="card-title">{title}</h1>}
        {detail && <p className="card-detail">{detail}</p>}
        {link && buttonText && (<a href={link} className="card-btn">{buttonText}</a>)}
      </div>
    );
  }
  