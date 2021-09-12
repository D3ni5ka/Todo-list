import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import divStyle from '../Item/Item.module.css'
import { text } from "@fortawesome/fontawesome-svg-core";


function Item({ onDeleteItem, onEdit, item, handleItem, onLossInput }) {
    console.log(item.id)
    const [checked1, setChecked1] = useState(true);



    const deleteItem = (e) => {
        e.preventDefault();
        onDeleteItem(item.id);
    }



    let checkedOn = () => {
        setChecked1(!checked1);

    }


    const changeItemText = (e) => {
        onEdit(item.id);
    }



    return (
        <div
            className={checked1 ? divStyle.divStyle : divStyle.divStyleActive}
        >

            {!item.isEdit && <span onDoubleClick={changeItemText}> {item.text} </span>}

            {item.isEdit && <input onChange={(event) => handleItem(event, item.id)} onBlur={() => onLossInput(item.id)} style={{
                width: 300,
                height: 25,
                outline: 'none',
                borderColor: 'none',
                border: 'none',
                background: '#f3f1f4',
                fontSize: '20px',
                color: "#40404a",

            }} type='text' value={item.text} />}


            <a onClick={deleteItem} className={divStyle.link} href="#">
                <FontAwesomeIcon icon={faTrashAlt} color='#e54d40' size="2x" />
            </a>

            <span onClick={checkedOn} className={checked1 ? divStyle.checked : divStyle.checkedActive}>
                <FontAwesomeIcon icon={faCheckSquare} color='#e54d40' size="2x" /></span>
        </div>
    )
}

export default Item;