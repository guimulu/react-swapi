import React from 'react';
import axios from 'axios';
import { Container, Card } from './styles';


const Starship = ({starship}) => (
  <Container>
    { starship.results.map(item => (
      <Card key={item.name}>
        <header>
          <strong>{item.name}</strong>
        </header>
        <ul>
          <li>
            Model:&nbsp;
            <small>
              {item.model}
            </small>
          </li>
          <li>
            Manufacturer:&nbsp;
            <small>
              {item.manufacturer}kg
            </small>
          </li>
          <li>
            Length:&nbsp;
            <small>
              {item.length}
            </small>
          </li>
          <li>
            Passengers:&nbsp;
            <small>
              {item.passengers}
            </small>
          </li>
          <li>
            Starship Class:&nbsp;
            <small>
              { item.starship_class }
            </small>
          </li>
        </ul>
      </Card>
    )) }
  </Container>

);

export default Starship;
