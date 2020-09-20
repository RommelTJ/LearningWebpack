import small1 from '../assets/1.jpg';
import small2 from '../assets/2.jpg';
import big3 from '../assets/3.jpg';
import '../styles/image_viewer.css';

const smallImage1 = document.createElement('img');
smallImage1.src = small1;
document.body.appendChild(smallImage1);

const smallImage2 = document.createElement('img');
smallImage2.src = small2;
document.body.appendChild(smallImage2);

const bigImage = document.createElement('img');
bigImage.src = big3;
document.body.appendChild(bigImage);
