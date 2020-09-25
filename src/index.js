const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  import('./image_viewer').then(module => {
    console.log('module: ', module);
  })
};

document.body.appendChild(button);
