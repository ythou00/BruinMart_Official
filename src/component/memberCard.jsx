import React from 'react';
import './memberCard.css';

export default function MemberCard({ name, role, description, imgSrc}){
    return (
        <div className="team-member-card">
            <img src={imgSrc} alt={name} className="team-member-photo" />
            <div className="team-member-info">
                <h3>{name}</h3>
                <p className="role">{role}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}