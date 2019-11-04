import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <section className="bg-darkblue">
    <div className="container">
      <div className="row">
        <div className="offset-sm-3 col-sm-6 text-center p-5 text-white">
          <img src="/assets/img/PCIA-Logo_120.png" alt=""/>

            <h5>
              Philippine Concrete Industry Association - Philconcrete.com
            </h5>
          <p>
            Unit 1108 Antel Global Corporate Center Julia Vargas Ortigas Pasig</p>
            <p>
            (02) 638 3414   •   pcia.sec@acs-manufacturing.com •  fb.com/philconcrete
            </p>
            <p>
              Copyright 2019
            </p>

        </div>
      </div>
    </div>

  </section>
)

export default Footer
