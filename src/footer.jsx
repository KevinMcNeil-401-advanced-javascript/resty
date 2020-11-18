import React from 'react';
import './sass/footer.scss';

function Footer() {
  return (
    <footer>
      <p>Copyright {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;