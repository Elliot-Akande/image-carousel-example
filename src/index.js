import './style.css';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import ImageCarousel from '@akande/image-carousel';

const carousel = ImageCarousel([img1, img2, img3]);
document.querySelector('.container').appendChild(carousel);
