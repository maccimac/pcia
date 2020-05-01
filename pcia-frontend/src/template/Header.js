import React, { useState, useEffect, Fragment} from 'react';
import Nav from './Nav';

const Header = (
  {title,
  sub,
  style,
  children,
  showNav=true
}
) => (
  <Fragment>
    <section id="template-header" style={style}>
      {showNav ? <Nav/> : null}

      <div className="container p-4">
        <div className="minheight-8rem">&nbsp;</div>
        <div className="row text-white text-center">
          <div className="col-12">
            <h1 className="">{title}</h1>

            <h2 className="">{sub}</h2>
          </div>

        </div>

      </div>

      {children}

      <div className="minheight-8rem">&nbsp;</div>
    </section>
  </Fragment>
)

export default Header;
