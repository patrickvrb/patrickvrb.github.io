import * as React from 'react';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};
const headingAccentStyles = {
  color: '#663399',
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%',
};

const subHeader = {
  ...linkStyle,
  listStyleType: 'none',
  marginTop: 10,
  marginBottom: 24,
};

const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const badgeStyle = {
  color: '#fff',
  backgroundColor: '#088413',
  border: '1px solid #088413',
  fontSize: 11,
  fontWeight: 'bold',
  letterSpacing: 1,
  borderRadius: 4,
  padding: '4px 6px',
  display: 'inline-block',
  position: 'relative',
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

// data
const links = [
  {
    text: 'SpaceX Dashboard',
    url: 'https://patrickvrb.github.io/spaceX-launches/',
    description:
      "React application fetching some rocket launches information from SpaceX's public API. I developed this project to learn more about React Hooks. \
            I found extremely useful the new hook's way of changing the application state. Paired with good React documentation, the learning process was taken with ease.",
    color: '#E95800',
    codebase: 'https://github.com/patrickvrb/spaceX-launches',
  },
  {
    text: 'Nanum Coreano',
    url: 'https://nanumcoreano.com.br/',
    description:
      'Wordpress website I made as a freelancer for a dear friend. The reason I chose to go with Wordpress framework was to facilitate future blog and content \
      updates made by herself, rather than depending on someone who knows web development to do so. It was my first real experience with web development being paid, \
      and also pairing with a UX designer using FIGMA as her prototyping software.',
    color: '#1099A8',
  },
  {
    text: 'Igor',
    description:
      'Flutter application for supporting RPG playing sessions. The Bloc library was implemented to manage the app state so that \
      the whole application knows its state, no matter where it is, enabling a simple and overall better code & state understanding. As a hybrid app, \
      I had the challenge to fit page elements on multiple mobile screen sizes, so I learned how to set those measures based on the context, using MediaQuery. \
      Other features I implemented were saving dice rolled numbers on each session and data persistence over Firebase.',
    color: '#BC027F',
    codebase: 'https://github.com/bololo21/igor_app',
  },
  {
    text: 'Meau',
    description:
      'Flutter application simulating a pet adoption center, where you can also help stray or adoption pets. \
      When building this application, I learned how to properly communicate with Firebase to persist and fetch de application data needed. \
      Also learned how to design on widget-oriented screens, preserving secure UI zones blocking user interaction, and Firebase role based authentication.',
    color: '#0D96F2',
    codebase: 'https://github.com/clararabello/meau_app',
  },
];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Patrick Beal - about me</title>
      <h1 style={headingStyles}>
        Patrick V. R. Beal
        <br />
        <span style={headingAccentStyles}>— Software Engineer </span>
        <br />
        <div style={subHeader}>patrickvrb@gmail.com</div>
      </h1>
      <strong>
        Passionate about learning. Motivated by making lives easier.
      </strong>
      <br />
      <br />
      <div>
        Currently working full-time as Fullstack Software Engineer @
        <a
          style={{ color: '#8954A8' }}
          href='https://www.take.net'
          target='_blank'
          rel='noreferrer'
        >
          Take Blip
        </a>.
      </div>
      <br />
      <div>
        Allocated in Research and Development tribe, my responsibilities are focused on developing the new SaaS product directed at smaller businesses. The goal is to bring closer together 
        brands and costumer, providing great experiences on WhatsApp and Instagram.
      </div>
      <div>
        Here you can find some of my side projects, all hosted on my{' '}
        <a
          style={{ color: '#8954A8' }}
          href='github.com/patrickvrb'
          target='_blank'
          rel='noreferrer'
        >
          GitHub
        </a>
        . Most of them I had an interest in learning a specific framework or
        architecture.
      </div>
      <br />
      <div>
        My main source of motivation to learn those subjects were Medium and
        Linkedin newsletters about emerging software innovation.
      </div>
      <br />

      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={link.url}
                target='_blank'
                rel='noreferrer'
              >
                {link.text}
                {/* <img src={icon} color='#663399' /> */}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label='New Badge'>
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
              {link.codebase && (
                <a
                  style={linkStyle}
                  href={link.codebase}
                  target='_blank'
                  rel='noreferrer'
                >
                  Codebase{' '}
                </a>
              )}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
