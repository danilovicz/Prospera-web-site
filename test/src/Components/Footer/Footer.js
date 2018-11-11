import React from 'react';
import './Footer.css';

const footer = props => (
  <div className="footer_container">
    <div className="contact">
    <p className="contact_p">Contact us!</p>

      <div className="Adress">
        <p>Adress: Terazije 99 </p>
      </div>
      <div className="email">
        <p>email: somemail@.gmail.com</p>

      </div>
      <div className="contact_num">
        <p>064 99 999</p>
        <p>011 456 789</p>
      </div>
    </div>

    <div className="footer_right">

    <div className="map">
    </div>



      <div className="social">
        <div className="follow">
        <p className="social_p">
          Follow us!
        </p>
        </div>
        <div className="facebook">
        <p>facebook</p>
        </div>
        <div className="instagram">
        <p>instagram</p>
        </div>
        <div className="twitter">
          <p>Twitter</p>
        </div>
      </div>
    </div>

  </div>
);

export default footer;
