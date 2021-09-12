import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Item from './Component/Item/Item'

let guid = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

let listItemInitial = [];


function App() {
  const [listItem, setListItem] = useState(listItemInitial);
  const [text, setText] = useState('');


  let addItem = (e) => {
    e.preventDefault();
    let newItem = {
      id: guid(),
      text,
      isEdit: false
    }
    if (text !== '') {
      const newListItem = [...listItem, newItem];
      setListItem(newListItem);
      setText('');
    }
  }


  let handleInput = (e) => {
    let text = e.target.value;
    setText(text);
  }


  const deleteItem = (id) => {
    const newList = listItem.filter(item => item.id !== id);
    setListItem(newList);
  }


  const cleanItems = (e) => {
    e.preventDefault();
    const cleanListItem = [];
    setListItem(cleanListItem);
  }


  let onEdit = (id) => {
    const updatedItems = listItem.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isEdit: true
        }
      }

      return item;
    });

    setListItem(updatedItems);
  }



  // ----------------------------

  const handleItem = (event, id) => {

    const newItemList = listItem.map(item => {
      if (item.id === id) {
        return {
          ...item,
          text: event.target.value
        }
      }
      return item;
    })
    setListItem(newItemList)
  }


  // ---------------------------

  function onLossInput(id) {

    const newItemInputList = listItem.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isEdit: false
        }
      }
      return item
    })
    setListItem(newItemInputList)
  }


  // ---------------------------


  return (
    <div className="App">
      <h2 style={{
        fontSize: '26px',
        textAlign: 'left',
        marginLeft: '30px'
      }}>Todo App</h2>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        margin: 'none',
        padding: 'none'
      }}>
        <input onChange={handleInput} value={text} style={{
          paddingLeft: '8px',
          marginTop: '3px',
          border: '1px solid #e0e0e0',
          borderRadius: '5px',
          width: 375,
          height: 53,
          marginRight: '5px',
          fontSize: '20px',
          outline: '1px solid #e0e0e0',
          marginBottom: '10px',
          outline: 'none'
        }} type='text' placeholder='Add you new todo' />
        <a href="#" onClick={addItem}><FontAwesomeIcon icon={faPlusSquare} color='#8e4be8' size="4x" /></a>
      </div>

      {
        listItem.map((item) => {
          return (
            <div key={item.id}><Item item={item}
              onDeleteItem={deleteItem}
              onEdit={onEdit}
              handleItem={handleItem}
              setText={setText}
              onLossInput={onLossInput}
            /></div>
          )
        })
      }

      <p style={{
        marginTop: '50px',
        textAlign: 'left',
        marginLeft: '30px',
        color: "#261d18",
        fontSize: "18px",
        marginBottom: '60px',
      }}>You have <b>{listItem.length}</b> pencing tacks

        <a href="#" onClick={cleanItems}><span style={{

          width: 100,
          height: 30,
          border: '1px solid black',
          float: 'right',
          background: '#904aeb',
          color: "white",
          textAlign: 'center',
          borderRadius: '5px',
          paddingTop: '5px',
          marginRight: '30px',
          fontWeight: "bold"
        }}>Clear All</span></a>
      </p>
    </div>
  );
}

export default App;
