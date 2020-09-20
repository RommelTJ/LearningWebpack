import '../assets/1.jpg';
import '../assets/2.jpg';
import '../assets/3.jpg';
import '../styles/image_viewer.css';

const image = document.createElement('img');
image.src = 'http://picsum.photos/400';

document.body.appendChild(image);
