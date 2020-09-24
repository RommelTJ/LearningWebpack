const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  console.log("click");
};

document.body.appendChild(button);
