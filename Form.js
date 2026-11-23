export class Form {
  constructor(id) {
    this.form = document.getElementById(id);
  }
  getFormValues() {
    return Object.fromEntries(new FormData(this.form).entries());
  }
  isValid() {
    return this.form.checkValidity();
  }
  resetForm() {
  
    this.form.reset()
  }
}