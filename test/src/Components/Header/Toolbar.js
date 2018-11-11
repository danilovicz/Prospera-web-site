import React from 'react';
import './Toolbar.css';

const toolbar = props=>(
  <header className="toolbar">
    <nav className="toolbar_naviation">
      <div className="toolbar_logo"><img className="logo_img" src="logo.png" /></div>
      <div className="toolbar_div">
        <ul className="toolbar_ul">

          <li className="toolbar_li"><a class="toolbar_a" href=""> Pocetna </a></li>
          <li className="toolbar_li"><a class="toolbar_a" href=""> O nama </a></li>
          <li className="toolbar_li"><a class="toolbar_a" href=""> Usluge </a></li>
          <li className="toolbar_li"><a class="toolbar_a" href=""> Pocetna </a></li>
          <li className="toolbar_li"><a class="toolbar_a" href=""> Aktuelnosti </a></li>
          <li className="toolbar_li"><a class="toolbar_a" href=""> Blog </a></li>
          <li className="toolbar_li"><a class="toolbar_a" href=""> Tim </a></li>
          <li className="toolbar_li"><a class="toolbar_a" href=""> Kontant </a></li>
          <li className="toolbar_li"><a class="toolbar_a" href=""> slicica </a></li>

        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
