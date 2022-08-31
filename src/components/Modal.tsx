import React from 'react'
import Context from '../context/context';
import { useContext } from 'react';
import Login from './Login';


const Modal = () => {
    const {openModal, setOpenModal} = useContext(Context);
  return (
    <div className={`modal fade ${openModal && "show d-block"}`} tabIndex={-1}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Modal title</h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={() => setOpenModal(false)}
            ></button>
          </div>
          <div className='modal-body'>
            <Login />
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <button type='button' className='btn btn-primary'>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal