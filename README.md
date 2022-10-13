## React dropdown 

react dropdown component

![](https://ibb.co/7WdQ09V)

## Installation
```
npm install dropdown-react-component
```

## Usage

```
import DropDownButton from 'dropdown-react-component/dist/App'
import upArrowImg from 'path/to/asset'
import downArrowImg from 'path/to/asset'

const defaultOption = {
        icon: icon, 
        text: 'Main Option', 
        name: 'main option', 
        link: 'main link'
}

const options = [
    {
        icon: icon_1, 
        text: 'Option One', 
        name: 'option one', 
        link: 'link 1'
    },
    {
        icon: icon_2, 
        text: 'Option Two', 
        name: 'option two', 
        link: 'link 2'
    },
    {
        icon: icon_3, 
        text: 'Option Three', 
        name: 'option three', 
        link: 'link 3'
    }
];

<DropDownButton 
    options={options} 
    mainBgColor={rgb(14, 114, 237)}
    arrowUpIcon={upArrowImg} 
    arrowDownIcon={downArrowImg}
    defaultOption={defaultOption}
/>;
```


## properties:
 - options - object, required
 - mainBgColor - string (RGB, RGBA, Hexadecimal..)
 - arrowUpIcon - image (png, svg...) 
 - downArrowImg - image (png, svg...)
 - defaultOption - object, required

 ## Keywords

 react react-dropdown dropdown-react