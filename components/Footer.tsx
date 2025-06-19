  // Header.tsx
  import React from 'react';

  const Footer= () => {
    
    const mainDivStyle: React.CSSProperties = {
        backgroundColor:'#FFFFDF',
        height:'25vh',
        overflow:'hidden'
      };

      const titulo: React.CSSProperties = {
        fontFamily: "AnticSlab",
        fontSize: "clamp(1.7rem, 3vw, 3.1rem)",
        textShadow: "3px 3px 1px rgba(137, 113, 109, 0.01)",
        color: "#7B6342",
      };

      const imgIconShare: React.CSSProperties = {
        height:'40px'
        };
      
      const imgIconInsta: React.CSSProperties = {
        height:'45px'
        };
      
      const imgIconMail: React.CSSProperties = {
        height:'40px'
        };
          
      
      const normal: React.CSSProperties = {
        fontFamily: "AnticSlab",
        fontSize: "clamp(0.7rem, 3vw, 2.1rem)",
        textShadow: "3px 3px 1px rgba(137, 113, 109, 0.01)",
        color: "#7B6342",
        margin:0,
      };


      return (
        <div style={mainDivStyle} className='d-flex flex-column justify-content-between ps-3'>
          <div  className='d-flex justify-content-between col-12 p-4'>
                <div className='d-flex flex-column justify-content-center align-content-center align-items-center text-center'>
                    <p style={normal} >Desenvolvido por</p>
                    <p style={titulo}>Diogo Juncal</p>
                </div>
                <div className='d-flex flex-column justify-content-center text-center align-content-between align-items-center'>
                  <div className='d-flex flex-row justify-content-center align-content-center text-center align-items-start text-center m-0' >
                    <p style={normal}>Partilhar página</p>
                    <img style={imgIconShare} className='mt-2' src="../imgs/Partilhar.png" alt="" />
                  </div>
                    <p style={titulo} >Onde foi o meu guito?</p>
                </div>
                <div className='d-flex flex-column justify-content-center align-content-center align-items-center text-center m-0'>
                    <p style={normal}>Contactos:</p>
                    <div className='d-flex flex-row gap-4'>
                        <img style={imgIconMail} src="../imgs/mail.png" alt="" />
                        <img style={imgIconInsta} src="../imgs/instagram.png" alt="" />
                    </div>
                </div> 
          </div>
          <div>
           <p>© 2025 Diogo Alves Juncal. Todos os direitos reservados.</p>
         </div>
         </div>  
      );
    };

  export default Footer;