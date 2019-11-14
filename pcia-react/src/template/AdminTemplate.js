import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const Template = ({
  showHeader=true,
  header={
    title: "",
    sub: "",
    style: {},
    children: "",
  },
  children}
) => {

  return (
    <Fragment>
      {
        showHeader
        ?
        <Header
          title = {header.title}
          sub = {header.sub}
          style={header.style}
          children={header.children}
          >
        </Header>
        : null

      }




      {children}
      <Footer/>
    </Fragment>

  )
}

export default Template;
