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

  document.addEventListener('closeModal', ()=> closeModal());
}

function initModal() {
  addEventListeners();
}

export default initModal;