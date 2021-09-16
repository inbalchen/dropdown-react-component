import React from 'react'

const DropDownItemList = ({icon, text, name, link}) => (
    <div>
        <li>
            <a href={link || '#'} target="_blank" rel="noreferrer" className="dropdown-button-list-item">
                {icon && <img src={icon} alt={name} style={{ width: '20px', marginRight: '12px' }} />}
                {text}
            </a>
        </li>
    </div>
)


export default DropDownItemList;