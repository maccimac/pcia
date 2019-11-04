import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Template from '../template'

const About = ( ) => (
  <Template
    header={{title: "About Us"}}
    >
    <section>
      <div className="container">
        <div className="minheight-8rem">&nbsp;</div>
        <div className="row align-items-center">
          <div className="col-sm-5 p-5">
            <img src="/assets/img/PCIA-Logo_600.png" alt="" className="w-100"/>
          </div>
          <div className="col-sm-7">
            <h4>Who We Are</h4>
            <h3>
              Concrete producers and suppliers
            </h3>
            <p>
              PCIA strives to create meaningful seminars and events throughout the year to develop a sense of community for its registered members. From the array of technical seminars, general assemblies and fellowships to sports and Christmas events, there are more than enough ways for you to be involved. We try to take an active role to create worthwhile occasions that create lasting impressions for our members.
</p><p>
              PCIA is an association of concrete producers, raw materials suppliers, testing laboratories and other allied companies who want to promote quality concrete
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <h4>
              Our Vision
            </h4>
            <p>
              An association of professional companies and individuals that is the guiding force in the promotion of quality standards for concrete products and services and their constituent materials in the Philippines.
            </p>

          </div>
          <div className="col-sm-8">
            <h4>
              Our Mission
            </h4>
            <p>
            Our mission begins with establishing an association of professional companies and individuals doing business in the Philippines, committed to improving quality standards related to the production of concrete products and services.
            </p><p>
            The association will create awareness of the importance of quality practices and standards to all concerned in the industry and will promote these through training and education.
            </p><p>
            The association will actively promote the adherence to quality standards throughout the construction industry and develop an accreditation scheme.
            </p><p>
            By self-regulation, the association will ensure that membership is offered or renewed initially to only those organizations and individuals that commit to improving the quality standards recognized by the association.

            </p>

          </div>

        </div>
        <div className="minheight-8rem">&nbsp;</div>
      </div>
    </section>
    <section className="bg-gradient text-white">
      <div className="minheight-8rem">&nbsp;</div>
      <div className="container">
        <h3>Timeline</h3>
        <div className="row">
          <div className="col-sm-3">
            <h2 className="text-mutedblue">2001</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className="col-sm-3">
            <h2 className="text-mutedblue">2001</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className="col-sm-3">
            <h2 className="text-mutedblue">2001</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className="col-sm-3">
            <h2 className="text-mutedblue">2001</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
      </div>
      <div className="minheight-8rem">&nbsp;</div>
    </section>
    <section>
      <div className="minheight-8rem">&nbsp;</div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3>The PCIA Community</h3>
          </div>
          <div className="col-sm-8">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          </div>
        </div>
        <div className="minheight-4rem">&nbsp;</div>
        <div className="row">
          <div className="col-sm-4 my-2">
            <img src="/assets/img/PCIA-team_1086.jpg" alt="" className="w-100"/>
          </div>
          <div className="col-sm-4 my-2">
            <img src="/assets/img/PCIA-team_1086.jpg" alt="" className="w-100"/>
          </div>
          <div className="col-sm-4 my-2">
            <img src="/assets/img/PCIA-team_1086.jpg" alt="" className="w-100"/>
          </div>
          <div className="col-sm-4 my-2">
            <img src="/assets/img/PCIA-team_1086.jpg" alt="" className="w-100"/>
          </div>
          <div className="col-sm-4 my-2">
            <img src="/assets/img/PCIA-team_1086.jpg" alt="" className="w-100"/>
          </div>
          <div className="col-sm-4 my-2">
            <img src="/assets/img/PCIA-team_1086.jpg" alt="" className="w-100"/>
          </div>
        </div>
      </div>
      <div className="minheight-8rem">&nbsp;</div>

    </section>
  </Template>
)

export default About;
