import React, { useRef } from 'react';
import './thingstoread.css';

function About() {
  const links = [ /*This is the list of the websites*/
    { name: 'Ocelot', url: 'https://en.wikipedia.org/wiki/Ocelot' },
    { name: 'Tiger', url: 'https://en.wikipedia.org/wiki/Tiger' },
    { name: 'Siamese cat', url: 'https://en.wikipedia.org/wiki/Siamese_cat' },
    { name: 'Bobcat', url: 'https://en.wikipedia.org/wiki/Bobcat' },
    { name: 'Cheeta', url: 'https://en.wikipedia.org/wiki/Cheetah' },
    { name: 'Sand cat', url: 'https://en.wikipedia.org/wiki/Sand_cat' },
    { name: 'Lynx', url: 'https://en.wikipedia.org/wiki/Lynx' },
    { name: 'Turkish Angora', url: 'https://en.wikipedia.org/wiki/Turkish_Angora' },
    { name: 'Ragdoll', url: 'https://en.wikipedia.org/wiki/Ragdoll' },
    { name: 'Maine Coon', url: 'https://en.wikipedia.org/wiki/Maine_Coon' },
  ];

  const linkRefs = useRef([]);

  const handleKeyDown = (e, index) => { /*This is the keyboard navigation portion of the list*/
    const lastIndex = links.length - 1;

    if (e.key === 'ArrowDown') { 
      e.preventDefault();
      const next = index === lastIndex ? 0 : index + 1;
      linkRefs.current[next]?.focus();
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = index === 0 ? lastIndex : index - 1;
      linkRefs.current[prev]?.focus();
    }
    /*This makes it so that when the spacebar is clicked, then the url is opened*/ 
    if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      window.open(links[index].url, '_blank');
    }
  };

  return (
    <div className="hyperlinks-container">
      <h2 className="title">Things to Read</h2>  
      <div className='explanation'>
        <p>These are some links to pages about cats because they are my favorite animal. Press <strong>Tab</strong> to activate keyboard access mode. You can also use <strong>Tab</strong> to navigate between elements in the navbar. You can use the <strong>up</strong> and <strong>down arrows</strong> to navigate between the list of elements and press <strong>Enter</strong> to enter any of the links. </p></div>     
    
      <ul className="hyperlinks-list">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              ref={(el) => (linkRefs.current[index] = el)}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex="0"
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
