import './App.css';
import DropDownButton from './components/DropDownButton';
import upArrowImg from './assets/up-chevron-white.svg';
import downArrowImg from './assets/down-chevron-white.svg';
import { options } from './utils/mock-data';
import globe from './assets/globe.png';
const defaultOption = {
  icon: globe,
  text: 'Global Integrations',
  name: 'global',
  link: 'https://github.com/inbalchen'
};

function App(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(DropDownButton, {
    options: props.options || options,
    mainBgColor: props.mainBgColor || "rgb(14, 114, 237)",
    arrowUpIcon: props.arrowUpIcon || upArrowImg,
    arrowDownIcon: props.arrowDownIcon || downArrowImg,
    defaultOption: props.defaultOption || defaultOption
  }));
}

export default App;