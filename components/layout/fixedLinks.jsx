import {
    FaTripadvisor,
    FaFacebookF,
    FaWhatsapp,
    FaInstagram,
    FaLinkedinIn,
    FaTiktok
  } from 'react-icons/fa';
  import { MdEmail } from "react-icons/md";
  
  
  import {
  
    FaMobileAlt,
   
    FaFacebook,
    
    FaSnapchat,
    
    FaVoicemail,
  } from "react-icons/fa";
  
  
  
  const SocialButtons = () => {
    const socials = [
  
  
      {
        name: 'Whatsapp',
        icon: <FaWhatsapp />,
        link: 'https://wtspee.com/905344425626',
      },
      {
      name: 'Whatsapp2',
      icon: <FaWhatsapp />,
      link: 'https://wtspee.com/905348828077',
    },
      
      {
        name: 'Facebook',
        icon: <FaFacebookF />,
        link: 'https://www.facebook.com/profile.php?id=61559966015912&mibextid=LQQJ4d',
      },
  
      {
        name: 'email',
        icon: <MdEmail />,
        link: 'mailto:info@elmiralojstik.com',
      },

      {
        name: 'email2',
        icon: <MdEmail />,
        link: 'mailto:muhasebe@elmiralojstik.com',
      },


      {
        name: 'email3',
        icon: <MdEmail />,
        link: 'mailto:director@elmiralojstik.com',
      },



  
      // {
      //   name: 'yotube',
      //   icon: <MdEmail />,
      //   link: 'mailto:Meralkalip@gmail.com',
      // },
      
  
  
      // {
      //   name: 'Instagram',
      //   icon: <FaInstagram />,
      //   link: 'https://www.instagram.com/nabhanyaser8?igsh=MXNtbDJ2cW1kMXc1cQ==',
      // },
  
  
      // {
      //   name: 'Tiktok',
      //   icon: <FaTiktok />,
      //   link: 'https://www.tiktok.com/@yasernbhan1?_t=8mEokZZgEz8&_r=1',
      // },
    ];
  
    return (
      <>
       <div dir='ltr' className="fixed py-12  top-[70%] z-10 right-0 translate-y-[-50%] flex flex-col items-end -gap-0.1">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-[#d70006] w-10 h-10 flex justify-center items-center text-xl hover:w-32 gap-2 transition-all duration-500 ease-in-out"
              onMouseEnter={(e) => {
                const childNode = e.target.childNodes[1];
                childNode && childNode.classList.remove('hidden');
              }}
              onMouseLeave={(e) => {
                const childNode = e.target.childNodes[1];
                childNode && childNode.classList.add('hidden');
              }}
            >
              { social?.name !== 'yotube' ? social.icon  : <img src="/yotube.svg" alt="" />}
              <span className="text-xs font-poly !text-[#d70006] !font-bold hidden">
                {social.name}
              </span>
            </a>
          ))}
        </div>
  
  
  
  
  
    
      </>
    );
  };
  
  export default SocialButtons;