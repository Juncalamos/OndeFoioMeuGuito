// Pagina.tsx
import React, { useEffect, useState } from 'react';
import { useVisibilityPercentage } from './useScrollIntoViewWhenVisible';



interface PaginaProps {
  children?: React.ReactNode;
  cor?: 'branco' | 'brancoSujo';
  pad?: '0' | '1' | '2' | '3' | '4';
  arrow?: 'y' | 'n';
  title?: string;
  idTo?: string;
  id?: string;
}

const Pagina: React.FC<PaginaProps> = ({ children, cor = 'branco', pad='0', arrow='y' ,title="", idTo='', id=''}) => {
  
  function scrollToElementById() {
    const element = document.getElementById(idTo);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }

  const [hover, setHover] = useState(false);

  
  const { ref, visibility } = useVisibilityPercentage<HTMLDivElement>();

  useEffect(() => {
    const setRealVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--real-vh', `${vh}px`);
    };

    setRealVh(); // Initial call
    window.addEventListener('resize', setRealVh);
    return () => window.removeEventListener('resize', setRealVh);
  }, []);



  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
  
    if (visibility >= 0.90 && visibility <= 1) {
      timeout = setTimeout(() => {
        if (!(visibility >= 0.90 && visibility <= 1))
          return
        ref.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      }, 300);
    }
  
    return () => clearTimeout(timeout);
  }, [visibility]);

  const cores = {
    branco: '#FFFFFA',
    brancoSujo: '#FFFFDF'
  };

  let padding: string;
  let display:string;

  switch (arrow) {
    case 'y':
        display = 'flex';
        break;
    case 'n':
        display = 'none';
        break;
  }


  switch (pad) {
    case '1':
      padding = '0vw';
      break;
    case '2':
      padding = '2vw';
      break;
    case '3':
      padding = '5vw';
      break;
    case '4':
      padding = '7vw';
      break;
    default:
      padding = '0vw';
  }

  const paginaStyle: React.CSSProperties = {
    height: 'calc(var(--real-vh, 1vh) * 100)',
    width: '100vw',
    margin: 0,
    overflow: 'hidden',
    padding,
    paddingBottom:'1vw',
    paddingTop:'2vw',
    backgroundColor: cores[cor],
    position:'relative',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  };

  const arrowStyle: React.CSSProperties = {
    display,
    height: hover 
    ? 'clamp(2.7rem,3vw,3rem)' :
      'clamp(2.4rem,3vw,2.8rem)',
    position: 'absolute',
    bottom: 'clamp(0.1rem,0.5vw,1rem)',
    left: '50%',
    transform:  'translateX(-50%) rotate(-90deg)',
    transition: 'height 0.26s ease, background-color 0.26s ease',
    cursor: 'pointer', 
    borderWidth: '1px',
    borderRadius:'10rem',
    padding:'5px',
    borderColor:'#FFF',
    borderStyle:'solid', 
    backgroundColor: hover?
    'rgba(86, 87, 87,0.07)':'rgba(86, 87, 87,0.00)'
  };

  const pStyle: React.CSSProperties= {
    display,
    whiteSpace: 'nowrap',
    fontSize: 'clamp(1.2rem, 4vw, 1.6rem)',
    fontFamily: 'AnticSlab',
    textShadow:'3px 3px 1px rgba(237, 213, 209, 0.2)',
    color:'#7B6342',
    margin: 0
};

  return (
    <div style={paginaStyle} ref={ref} id={id}>
      <div className='d-flex'>
        <div style={{height: '3vw',
            position: 'absolute',
            top: '1vw',
            left: '50%',
            transform: 'translateX(-50%)'}}>
          <p style={pStyle}>{title}</p>
        </div>    
          {children}
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <img style={arrowStyle} onClick={scrollToElementById} src="../imgs/arrow.png" alt=""  onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)} />
        </div>
    </div>
  );
};

export default Pagina;