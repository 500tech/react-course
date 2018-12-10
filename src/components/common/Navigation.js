import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

const links = [
  { id: 'home', route: '/welcome', label: 'home' },
  { id: 'todos', route: '/', label: 'todos' }
];

const Navigation = props => {
  return (
    <Bar>
      {
        links.map(link => (
          <MyLink
            onClick={() => props.history.push(link.route)}
            key={link.id}
          >
            {link.label}
          </MyLink>
        ))
      }
    </Bar>
  );
};

export default withRouter(Navigation);

const Bar = styled.div`
  width: 100vw;
  height: 60px;
  background: #000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding: 0 40px;
`;

const MyLink = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  margin-right: 20px;
  text-transform: uppercase;
  cursor: pointer;
`;
