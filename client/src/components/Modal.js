const modal = document.querySelector("#modal")
const modalBtn = document.querySelector("#modal-btn")

const openModal = () => {
  modal.style.display = "block";
}

const closeModal = () => {
  modal.style.display = "none"
}

function outsideClick(e){
  if(e.target === modal){
    closeModal()
  }
}

function eventListeners() {
  modalBtn.addEventListener('click', openModal);
  window.addEventListener('click', outsideClick);
  document.addEventListener('collapseModal', ()=> {
    closeModal()
  })
}

function modalFunctions(){
  eventListeners()
}

export default modalFunctions;