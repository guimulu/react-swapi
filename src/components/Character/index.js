import React from 'react';

import { Container, Card } from './styles';

const Character = ({people}) => (
  <Container>
    { people.results.map(item => (
      <Card key={item.name}>
        <header>
          <strong>{item.name}</strong>
        </header>
        <ul>
          <li>
            Height:&nbsp;
            <small>
              {item.height}cm
            </small>
          </li>
          <li>
            Mass:&nbsp;
            <small>
              {item.mass}kg
            </small>
          </li>
          <li>
            Eye color:&nbsp;
            <small>
              {item.eye_color}
            </small>
          </li>
          <li>
            Gender:&nbsp;
            <small>
              {item.gender}
            </small>
          </li>
          <li>
            Species:&nbsp;
            <small>
              {item.species}
            </small>
          </li>
        </ul>
      </Card>
    )) }
  </Container>

);

export default Character;
