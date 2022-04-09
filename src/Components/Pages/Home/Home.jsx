// import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react'
import style from './Home.module.css';
import {UpperPart} from './UpperPart/UpperPart.jsx';
// import {MiddlePart} from './MiddlePart/MiddlePart.jsx';
import {Footer} from '../../Footer/Footer';
import { ResponsiveFooter } from '../../Footer/ResponsiveFooter';
import styled from 'styled-components';
import { Copyright } from '../../Copyright/Copyright';
import { HomePage } from './HomePage';


const FooterNonResponsive=styled.div`
@media all and (max-width: 769px)
{
    display: none;
}
`
const FooterResponsive=styled.div`
display:none;
@media all and (max-width: 769px)
{
    display: flex;
    flex-direction: column;
}
`

export const Home = () => {
  return (
    <>
    <div className={style.container}>
      <UpperPart/>
      {/* <MiddlePart/> */}
      <HomePage />
    </div>
    <FooterNonResponsive>
      <Footer/>
    </FooterNonResponsive>
    <FooterResponsive>
      <ResponsiveFooter mainTitle="Practo" subHeading={["About","Blog","Careers","Press","Contact Us"]}/>
      <ResponsiveFooter mainTitle="For Patients" subHeading={["Search for Clinics","Search for Hospitals","Search for Doctors","Book Diagnostics Tests","Book Full Body Checkups","Practo Plus","Covid Hospital listing","Health app","Practo Drive"]}/>
      <ResponsiveFooter mainTitle="For Doctors" subHeading={["Practo Consult","Health Feed","Practo Profile"]}/>
      <ResponsiveFooter mainTitle="For Clinics" subHeading={["Ray by Practo","Practo Reach","Ray Tab","Practo Pro"]}/>
      <ResponsiveFooter mainTitle="For Hospitals" subHeading={["Insta by Practo","Qikell by Practo","Practo Profile","Practo Reach"]}/>
      <ResponsiveFooter mainTitle="More" subHeading={["Help","Developers","Privacy Policy","Terms and Conditions","Health Directory","Corporate Wellness"]}/>
      <ResponsiveFooter mainTitle="Social" subHeading={["Facebook","Twitter","Linkedin","Youtube","Github"]}/>
      <Copyright/>
    </FooterResponsive>
    </>
  )
}
