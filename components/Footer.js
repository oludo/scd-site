import { AiOutlineWhatsApp } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdPlace } from "react-icons/md";

export default function Footer(params) {
  return (
    <footer className="lp__footer">
      <div className="footer">
        <address className="social">
          {[
            {
              href: "https://goo.gl/maps/y1aFiuw66brf9Vmw5",
              icon: <MdPlace className="icon icon--round icon--dark" />,
            },
          ].map((social, index) => (
            <a href={social.href} target="_blank" key={index}>
              {social.icon}
            </a>
          ))}
        </address>

        <div className="section section--footer">
          <div className="addresses">
            {[
              {
                href: "https://goo.gl/maps/y1aFiuw66brf9Vmw5",
                name: "Endereço",
                link: "Rua do Amparo, 65 - Cascadura",
              },
            ].map((address, index) => (
              <div key={index}>
                <p className="text">
                  <span className="text text--bold text--dark">
                    {address.name}
                  </span>
                </p>
                <a className="link" href={address.href}>
                  {address.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
