let string = "";
let buttons = document.querySelectorAll('button');
let input = document.querySelector('.input');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;

    if (value === '=') {
      try {
        string = eval(string.replace(/%/g, '/100').replace(/X/g, '*'));
      } catch {
        string = "Error";
      }
      input.value = string;
    } 
    else if (value === 'AC') {
      string = "";
      input.value = string;
    } 
    else if (value === 'BS') {
      string = string.slice(0, -1);
      input.value = string;
    }
    else {
      string += value;
      input.value = string;
    }
  });
});
