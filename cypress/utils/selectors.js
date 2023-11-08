class Selectors {
  constructor() {
    this.common = {
      button: '.sb-button--primary',
      headerTitle: '.header__title',
      loginHeader: '.login__header',
      submitButton: 'button[type="submit"]',
      closeModalButton: '.sb-modal__close-button',
    };
  }
}

export default new Selectors();
