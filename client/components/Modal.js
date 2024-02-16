// class Modal{
//   constructor(){
//     // create private variables
//     this._modal = document.querySelector('#modal');
//     this._modalBtn = document.querySelector('#modal-btn');

//     // call the eventListeners here... coz constructors run right away
//     this.addEventListeners()
//   }

//   // Add a method called --- addEventListener to put all the eventListeners here
//   addEventListeners(){
//     this._modalBtn.addEventListener('click', this.open.bind(this));
//     window.addEventListener('click', this.outSideClick.bind(this));
//   }

//   // create the function- open
//   open(){
//     this._modal.style.display = 'block'
//   }

//   // create function- close
//   close(){
//     this._modal.style.display = 'none'
//   }

//   outSideClick(e){
//     if(e.target === this._modal){
//       close()
//     }
//   };
// }
// export default Modal;

const modal = document.querySelector('#modal');
const modalBtn = document.querySelector('#modal-btn');

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function addEventListeners() {
  modalBtn.addEventListener('click', openModal);
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
}

function initModal() {
  addEventListeners();
}

export default initModal;