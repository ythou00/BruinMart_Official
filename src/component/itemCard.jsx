import React from 'react';
import './itemCard.css'
import { Link } from 'react-router-dom';

export default function ItemCard({ imgSrc, imgAlt, title, detail, buttonText, link, onClick }) {
    return (
      <div className="card-container">
        {imgSrc && imgAlt && (<img className="card-image" src={imgSrc} alt={imgAlt} />)}
        {title && <h1 className="card-title">{title}</h1>}
        {/* {detail && <p className="card-detail">{detail}</p>} */}
        {Array.isArray(detail) ? (
          <ul className="card-detail">
            {detail.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        ) : (
          <p className="card-detail">{detail}</p>
        )}
        {buttonText && (link && !onClick ? (
          <Link to={link} className="card-btn">{buttonText}</Link>
        ) : (
          <button className="card-btn" onClick={onClick}>{buttonText}</button>
        ))}

      </div>
    );
  }
  