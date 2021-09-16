import React, { useEffect, useState, useRef } from 'react'
import DropDownItemList from './DropDownItemList'

const DropDownButton = (props) => {
  const myRef = useRef(null)
  const [open, setOpen] = useState(false);
  const [isDown, setIsDown] = useState(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, {passive: true})
    return () => {
        document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleClickOutside = e => {
    if (myRef && !myRef.current.contains(e.target)) {
      setOpen(false)
      setIsDown(false)
    }
  }

  const handleClickInside = () => {
    setOpen(!open)
    setIsDown(!isDown)
  }

  return (
      <div ref={myRef} className="dropdown-button-container">
        <div className="dropdown-button-main">
          <button href='https://github.com/inbalchen' target="_blank" rel="noreferrer" className="dropdown-button" style={{backgroundColor: props.mainBgColor}}>
              {props.defaultOption.icon && <img src={props.defaultOption.icon} alt={props.defaultOption.name} />}
              {props.defaultOption.text}
          </button>
          <button className={ isDown ? 'drop-down-btn-open' : 'drop-down-btn-close'} onClick={handleClickInside} style={{backgroundColor: props.mainBgColor}}>
            {isDown ? 
              <img src={props.arrowUpIcon} alt="down-up" /> 
              : 
              <img src={props.arrowDownIcon} alt="down-up" />
            }
          </button>
        </div>
        {open && (
            <ul className="dropdown-list">
              {props.options && props.options.map(option => (
                <DropDownItemList 
                  key={option.name}
                  icon={option.icon} 
                  text={option.text} 
                  name={option.name} 
                  link={option.link} 
                />
              ))}
            </ul>
        )}
      </div>
  )
}

export default DropDownButton