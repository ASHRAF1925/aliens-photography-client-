import React from "react";
import logo from '../../../Assets/logo.jpg'
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
import { Footer } from "flowbite-react";

const Foter = () => {
  return (
    <div className="bg-teal-300">

     
<Footer container={true} className="bg-teal-300">
<div className="w-full">
  <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
    <div>
      <Footer.Brand
      className="h-20"
        href="/"
        src={logo}
        alt=""
        name="Alien's Photography"
      />
    </div>
    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
      <div>
        <Footer.Title title="about" />
        <Footer.LinkGroup col={true}>
          <Footer.Link href="#">Flowbite</Footer.Link>
          <Footer.Link href="#">Tailwind CSS</Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title="Follow us" />
        <Footer.LinkGroup col={true}>
          <Footer.Link href="#">Github</Footer.Link>
          <Footer.Link href="#">Discord</Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title="Legal" />
        <Footer.LinkGroup col={true}>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Terms & Conditions</Footer.Link>
        </Footer.LinkGroup>
      </div>
    </div>
  </div>
  <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
      <Footer.Icon href="#" icon={BsFacebook} />
      <Footer.Icon href="#" icon={BsInstagram} />
      <Footer.Icon href="#" icon={BsTwitter} />
      <Footer.Icon href="#" icon={BsGithub} />
      <Footer.Icon href="#" icon={BsDribbble} />
    </div>
  <Footer.Divider />
  <div className="w-full text-center">
    <Footer.Copyright className="text-center" href="#" by="Aliens's Photography™" year={2022} />
  
  </div>
</div>
</Footer>
    </div>
  );
};

export default Foter;

