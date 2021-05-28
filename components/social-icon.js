export default function SocialIcon({ link, iconPath }) {
  return (
    <li className="dib ph2 raise">
      <a href={link} className="link bg-white black db relative br-100 pa2">
        <img src={iconPath} width="16px" height="16px" className="db" />
      </a>
    </li>
  )
}