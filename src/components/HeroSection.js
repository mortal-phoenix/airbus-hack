import React from 'react';
import './HeroSection.css';
import '../App.css';
import Button from './Button';
import styles from './styles';
import useFileDownloader from '../hooks/useFileDownloader';


export default function HeroSection() {
    //const [button, setButton] = useState(true);

  return (
    <div className='hero-container'>
        <h1>A Dev's Dream</h1>
        <Button>MERN</Button>
        <Button>MEAN</Button>
    </div>
  )
}
//<img src='./Images/graphic.jpg' alt='graphic' height='800' width='1920'/>