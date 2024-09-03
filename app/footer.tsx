import { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <footer>
      <div className={isFollowing ? 'active' : ''}>
        {/* Button for revealing and hiding the corner card */}
        <button className='hover:text-slate-900' onClick={toggleFollow}>
          {' '}
          {isFollowing ? 'x' : 'Contact me'}
        </button>
        {isFollowing && (
          <ul className='rotate-90 ml-12 -mt-8 scale-50 text-sm flex flex-row'>
            {/* Instagram */}
            <li>
              <SocialIcon
                className='ml-1 max-w-9'
                url='https://www.instagram.com/jytkypappa555/?hl=fi'
              />
            </li>
            {/* LinkedIn */}
            <li>
              <SocialIcon
                className='ml-1 max-w-9'
                url='https://www.linkedin.com/in/severi-boesen-71a0b31a7/'
              />
            </li>
            {/* YouTube */}
            <li>
              <SocialIcon
                className='ml-1 max-w-9'
                url=' 	www.youtube.com/@scionicmusic'
              />
            </li>
            {/* GitHub */}
            <li>
              <SocialIcon
                className='ml-1 max-w-9'
                url='https://github.com/AugustBoesen'
              />
            </li>
          </ul>
        )}
        {/* Card content while revealed */}
        {isFollowing && (
          <ul className='whitespace-nowrap rotate-90 ml-28 -mt-[4.7rem] scale-50 text-[0.6rem] flex flex-col'>
            <li>
              <b>Discord: </b>sevu_
            </li>
            <li className='-mt-2'>
              <b>Email:</b> augustboesen(at)gmail.com
            </li>
            <li className='-mt-2'>
              <b>Location:</b> Jyväskylä, Finland
            </li>
          </ul>
        )}
      </div>
    </footer>
  );
}
