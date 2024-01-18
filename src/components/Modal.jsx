import React from 'react'

const Modal = (props) => {

function onCancel() {
    props.onCancel();
} 

function onConfirm() {
    props.onConfirm();
}

  return (
    <div className='modal'>
        <p>Are you sure?</p>
        <button className='btn btn--alt' onClick={onCancel}>Cancel</button>
        <button className='btn' onClick={onConfirm}>Confirm</button>
    </div>
  )
}

export default Modal