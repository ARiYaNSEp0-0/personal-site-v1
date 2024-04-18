import "./SocialMedia.css";
const SocialMedia = ({ direction = "vertical", socials = [] }) => {
  return (
    <div className={`social-media social-media--${direction}`}>
      <ul className="social-media__list">
        {socials.map((social) => (
          <li key={social.id}>
            <a href={social.address}>
              {social.icon !== undefined && <span>{social.icon}</span>}
              {social.text !== undefined && <span>{social.text}</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
