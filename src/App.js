import React from 'react'
import './App.css';
import DropDownButton from './component/DropDownButton'
import upArrowImg from './component/assets/up-chevron-white.svg'
import downArrowImg from './component/assets/down-chevron-white.svg'
import { options } from './component/utils/mock-data'
import globe from './component/assets/globe.png'

const defaultOption = {
  icon: globe, 
  text: 'Global Integrations', 
  name: 'global', 
  link: 'https://github.com/inbalchen'
}

function App(props) {
  return (
    <div className="App">
      <DropDownButton 
        options={props.options || options}
        mainBgColor={props.mainBgColor || "rgb(14, 114, 237)"} 
        arrowUpIcon={props.arrowUpIcon || upArrowImg} 
        arrowDownIcon={props.arrowDownIcon || downArrowImg}
        defaultOption={props.defaultOption || defaultOption}
      />
    </div>
  );
}

export default App;
