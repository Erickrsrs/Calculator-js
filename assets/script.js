function Calculadora() {
  this.display = document.querySelector(".display");

  this.iniciaCalculadora = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  };

  this.cliqueBotoes = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) this.btnDisplay(el);
      if (el.classList.contains("btn-clear")) this.clearDisplay();
      if (el.classList.contains("btn-del")) this.deletaUm();
      if (el.classList.contains("btn-eq")) this.realizaConta();
    });
  };

  this.btnDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };
  this.clearDisplay = () => (this.display.value = "");
  this.deletaUm = () => (this.display.value = this.display.value.slice(0, -1));
  this.realizaConta = () => {
    let conta = this.display.value;
    try {
      conta = eval(conta);
      if (!conta) {
        alert("Conta inválida");
        this.display.value = "";
        return;
      }
      this.display.value = String(conta);
    } catch (e) {
      alert("Conta inválida");
      this.display.value = "";
      return;
    }
  };

  this.pressionaEnter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) this.realizaConta();
    });
  };
}
const calculadora = new Calculadora();
calculadora.iniciaCalculadora();
