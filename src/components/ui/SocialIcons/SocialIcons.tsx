
import { socialIcons } from "@/constants/socials";

const SocialIcons = () => {
  return (
      <>
    <div className="footer-section-networks">
            {socialIcons.map(({ id, component: Icon, href }) => (
              <div className="networks w-[100%] h-[100%]" key={id}>
                <a href={href} className="w-full h-full flex items-center justify-center rounded-full" target="_blank" rel="noopener noreferrer">
                  <Icon className="w-5 h-5" />
                </a>
              </div>
            ))}
    </div>
            <div className="tel">
              <p className="title">☎ Tel: 123-456-789</p>
            </div>
            </>
  );
};

export default SocialIcons;
