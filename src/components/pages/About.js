import React from 'react';

const About = props => {
  return (
    <div onClick={() => props.history.push('/home')}>
      about page
    </div>
  );
};

export default About;
