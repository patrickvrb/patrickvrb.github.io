import * as React from 'react';
import icon from '../images/open_link.svg';

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

const docLinkStyle = {
    ...linkStyle,
    listStyleType: 'none',
    marginBottom: 24,
};

const descriptionStyle = {
    color: '#232129',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
};

const docLink = {
    text: 'Documentation',
    url: 'https://www.gatsbyjs.com/docs/',
    color: '#8954A8',
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
            "React application fetching some rocket lanuches information from SpaceX's public API. I developed this project to learn more about React Hooks. \
            I found extremely useful the new hook's way of changing the application state. Paired with a good React documentation, the learning process was taken with ease.",
        color: '#E95800',
        codebase: 'https://github.com/patrickvrb/spaceX-launches',
    },
];

// markup
const IndexPage = () => {
    return (
        <main style={pageStyles}>
            <title>Patrick Beal - about me</title>
            <h1 style={headingStyles}>
                Patrick Vitas Reguera Beal
                <br />
                <span style={headingAccentStyles}>— Software Engineer </span>
            </h1>
            <div>
                Currently working as Full Time Front-End Software Engineer @
                <a href='http://www.foton.la/' target='_blank' rel='noreferrer'>
                    Fóton
                </a>{' '}
                for the business and bank market.{' '}
            </div>
            <br />
            <div>
                Here you can find some of my side projects. Most of them I had
                interest in learning a specific framework or architecture.
            </div>
            <br />
            <div>
                My main source of motivation to learn those subjects were Medium
                and Linkedin newslatters about emerging software innovation.{' '}
            </div>
            <br />

            <ul style={listStyles}>
                {links.map((link) => (
                    <li
                        key={link.url}
                        style={{ ...listItemStyles, color: link.color }}
                    >
                        <span>
                            <a
                                style={linkStyle}
                                href={link.url}
                                target='_blank'
                                rel='noreferrer'
                            >
                                {link.text}
                                <img src={icon} color='#663399' />
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
