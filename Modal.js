export class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.overlay = document.querySelector('.overlay')
    this.closeButton = this.modal.querySelector('.modal__close-btn')
    this.listenCLoseButton()
  }
  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
  }
  close() {
    this.modal.classList.remove('modal-showed')
    this.overlay.classList.remove('overlay-showed');

  }
  isOpen() {
    return this.modal.classList.contains('modal-showed')
  }
  listenCLoseButton() {
    this.closeButton.addEventListener(
      'click', () => {
        this.close();
      });
  }

}