import { Github, Home, Linkedin, NotebookIcon, Palette, Phone, Twitter, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const NavButton = ({label, x, y, icon, link, links,  newTab }) => {

const navigate = useNavigate()

  const getIcon = (icon) =>{
    switch (icon) {
        case "home":
            return <Home className='w-full h-auto' strokeWidth={1.5} /> 
        case "about":
            return <User className='w-full h-auto' strokeWidth={1.5} />
        case "projects":
            return <Palette className='w-full h-auto' strokeWidth={1.5} />;
        case "contact":
            return <Phone className='w-full h-auto' strokeWidth={1.5} />;
        case "github":
            return    <Github className='w-full h-auto' strokeWidth={1.5} />;
        case "linkedin":
            return  <Linkedin className='w-full h-auto' strokeWidth={1.5} />;
        case "twitter":
            return <Twitter className='w-full h-auto' strokeWidth={1.5} />;
        case "resume":
            return <NotebookIcon className='w-full h-auto' strokeWidth={1.5} />;
        default:
            return <User className='w-full h-auto' strokeWidth={1.5} />;
    }
}

  return (
    <>
      <div 
          className='absolute z-50' 
          style={{transform : `translate(${x}, ${y})`}}>
          <Link
            className='text-foreground rounded-full flex items-center justify-center bg-background/40
            backdrop-blur-[6px] hover:pause '
            aria-label={label} 
            target={newTab ? "_blank" : "_self"}
            to={link}
            name={label}
          >
          <span className='relative w-14 h-14 p-4 group cursor:pointer animate-spin-slow-reverse text-foreground loading:lazy backdrop-blur-[6px] rounded-full group-hover:pause'>{getIcon(icon)}
            <span className='peer bg-tranparent absolute left-0 top-0 h-full w-full' />
          </span>
        </Link>
      </div>
    </>
  )
}

export default NavButton