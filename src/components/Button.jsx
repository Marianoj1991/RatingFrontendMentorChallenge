
import { useContext } from 'react';
import '../styles/button.css';
import { RateContext } from '../context/RateContext';


export const Button = ({ children }) => {

  const { onRate } = useContext(RateContext);

  return (
    <button
      onClick={ () => onRate(children) }
      className='button'>
        { children }
    </button>
  )
}
