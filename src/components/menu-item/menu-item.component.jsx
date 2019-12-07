import React from 'react';
import './menu-item.style.scss'
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div onClick={() => history.push(`${match.url}${linkUrl}`)} className={`${size} menu-item`}>
        <div
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
            className="background-image"
            ></div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);