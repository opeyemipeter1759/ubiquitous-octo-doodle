import React from 'react'
import './modal.scss'

function Modal({show, closeModalHandler}) {
  return (
    <div className="modal-wrapper"
    style={{
      transform: show? 'translateY(8vh)': 'translateY(100vh)',
      opacity: show? '1': '1'

    }}
    >
      <div className="modal-header row"> 
        <span className=" float-left hide" onClick={closeModalHandler}> <button type="button" class="btn btn-x">x </button> </span>
        <p className="title text-center">Filter options</p>
          <div className="float-right doneBtn">
        <button type="button" class="btn btn-green hide">Done</button>
          </div>
      </div>
      <div className="modalContent">
        <div className="modalBody">
            <label for="" className="mt-2">Location</label>
            <div class="input-group mb-4">
              <select class="custom-select" id="inputGroupSelect04">
                <option selected>Ibadan</option>
                <option value="1">Lagos</option>
                <option value="2">Oyo</option>
                <option value="3">Abuja</option>
              </select>
          </div>
           <label for="">Categories</label>
            <div class="input-group">
              <select class="custom-select" id="inputGroupSelect04">
                <option selected>Fashion</option>
                <option value="1">Music</option>
                <option value="2">Tech</option>
                <option value="3">Writer</option>
              </select>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Modal
