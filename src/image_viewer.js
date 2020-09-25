import small1 from '../assets/1.jpg';
import '../styles/image_viewer.css';

export default () => {
  const smallImage1 = document.createElement('img');
  smallImage1.src = small1;
  document.body.appendChild(smallImage1);
};
