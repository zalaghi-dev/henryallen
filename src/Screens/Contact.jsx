import React from "react";
import LinkCard from "../components/LinkCard";
function Contact() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <LinkCard
        className="w-100 border-bottom border-3 border-danger bg-black text-white"
        icon={<i className="fas fa-mobile   "></i>}
        link="tel://+989106030260"
        name="+98 910 603 0260"
      />

      <LinkCard
        className="w-100 border-bottom border-3 border-danger bg-black text-white"
        icon={<i className="fas fa-envelope  "></i>}
        link="mailto:henryallen.dev@gmail.com"
        name="HenryAllen.dev@gmail.com"
      />

      <LinkCard
        icon={<i className="fab fa-instagram   "></i>}
        link="https://www.instagram.com/henryallen.dev"
        // name="Instagram"
      />
      <LinkCard
        icon={<i className="fab fa-whatsapp  "></i>}
        link="https://wa.me/message/WXN6BZMOJLYCB1"
        // name="Whatsapp"
      />
      <LinkCard
        icon={<i className="fab fa-telegram  "></i>}
        link="https://t.me/henryallen_dev"
        // name="Telegram"
      />
      <LinkCard
        icon={<i className="fab fa-github  "></i>}
        link="https://github.com/HenryAllen-dev"
        // name="Github"
      />
      <LinkCard
        icon={<i className="fab fa-discord  "></i>}
        link="https://discordapp.com/users/564176079485403187/"
        // name="Discord"
      />
      <LinkCard
        icon={<i className="fab fa-skype  "></i>}
        link="https://join.skype.com/invite/EY8o9Jc56csO"
        // name="Skype"
      />
      <LinkCard
        icon={<i className="fab fa-linkedin  "></i>}
        link="#"
        // name="LinkedIn"
      />
      <LinkCard
        icon={<i className="fab fa-twitter  "></i>}
        link="#"
        // name="Twitter"
      />
    </div>
  );
}

export default Contact;
