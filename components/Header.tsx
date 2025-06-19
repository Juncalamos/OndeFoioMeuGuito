  // Header.tsx
  import React from 'react';
  import {Menu} from './Menu'



  
  function scrollToElementById() {
    const element = document.getElementById("1");
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }

  const Header=() => {
      
      const headerStyle: React.CSSProperties = {
        background:'transparent',
        top:0,
        position:'fixed',
        width:'100vw',
        display: 'flex',              
        justifyContent: 'space-between',
        overflow:'hidden',
        margin: 0,
        padding: '1.5vw 2vw', // um pouco de margem lateral ajuda
        overflowX: 'hidden',
        zIndex:3
      };

      const h1Style: React.CSSProperties= {
          whiteSpace: 'nowrap',
          fontSize: 'clamp(0.8rem,4vw,1.5rem)',
          fontFamily: 'AnticSlab',
          textShadow:'3px 3px 1px rgba(237, 213, 209, 1)',
          color:'#7B6342',
          margin: 0,
          cursor:'pointer'
      };
    
      return (
          <header className='justify-content-end justify-content-sm-between' style={headerStyle}>
          {/* Conteúdo aqui, como por exemplo: */}
          <h1 className='d-sm-flex d-none' style={h1Style} onClick={scrollToElementById}>Onde foi o meu Guito</h1>
          
          <Menu/>
          
        </header>
      );
    };

  export default Header;