import React from 'react';
import logo from './logo.svg';
import './App.css';

//import DropdownMenu, { DropdownItemGroup, DropdownItem } from '@atlaskit/dropdown-menu';

function onItemClick(arg) {
  console.log('keydown');
}

var obj = {
  dragHandleProps: {
    onMouseDown: function(arg) {
      console.log('clicked', arg.target);
    }
  }
};

function App() {
  return (
    <div className="App">
      {/*<DropdownMenu
        trigger="Choices"
        triggerType="button"
        shouldFlip={false}
        position="right middle"
      >
        <DropdownItem 
          dnd={Object.assign({}, obj, {dragHandleProps: { ...obj.dragHandleProps, value: 'Sydney'}})}
          onClick={onItemClick.bind(this, 'Sydney')}
        >Sydney</DropdownItem>
        <DropdownItem 
          dnd={obj}
          onClick={onItemClick.bind(this, 'Bangalore')}
        >Bangalore</DropdownItem>
      </DropdownMenu>*/}
    </div>
  );
}

export default App;
