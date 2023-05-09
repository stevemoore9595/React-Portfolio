import React from 'react';
import '../styles/Header.css';
// Try putting this in the Header file, then add css

// const styles = {
//     headerStyle: {
//       background: 'red',
//     },
//     // headingStyle: {
//     //   fontSize: '100px',
//     // },
//   };
  

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header">
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#aboutMe"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
        {/* <h1>Welcome</h1> */}
    </header>
  );
}


  // We use JSX curly braces to evaluate the style object
  
//   function NavTabs() {
//     return (
//       <header style={styles.headerStyle} className="header">
//         <h1 style={styles.headingStyle}>Welcome</h1>
//       </header>
//     );
//   }

export default Header;