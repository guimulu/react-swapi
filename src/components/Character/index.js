import React from 'react';
import axios from 'axios';
import { Container, Card } from './styles';

const getSpecie = (species) => {
  //AIzaSyAwA6lmjwZ5N99B83PYIH-Rj2B6ehZfQuI
  const specie = species.toString().substring(29, 31);
  console.log(specie);
  // if (species != ''){
  //   const specie = axios.get(`${species}`);
  //   return specie
  //   .then(result => { console.log(result.data.name); return result.data.name; })
  //   .catch(error => { console.error(error); throw error; });

  //   //return specie;
  // }

  switch (specie) {
    case '1/':
      return 'Human';
      break;
    case '2/':
      return 'Droid';
      break;
    case '3/':
      return 'Wookiee';
      break;
    case '4/':
      return 'Rodian';
      break;
    case '5/':
      return 'Hutt';
      break;
    case '6/':
      return 'Yoda\'s species';
      break;
    case '7/':
      return 'Trandoshan';
      break;
    case '8/':
      return 'Mon Calamari';
      break;
    case '9/':
      return 'Ewok';
      break;
    case '10':
      return 'Sullustan';
      break;
    case '11':
      return 'Neimodian';
      break;
    case '12':
      return 'Gungan';
      break;
    case '13':
      return 'Toydarian';
      break;
    case '14':
      return 'Dug';
      break;
    case '15':
      return 'Twi\'lek';
      break;
    case '16':
      return 'Aleena';
      break;
    case '17':
      return 'Vulptereen';
      break;
    case '18':
      return 'Xexto';
      break;
    case '19':
      return 'Toong';
      break;
    case '20':
      return 'Cerean';
      break;
    case '21':
      return 'Nautolan';
      break;
    case '22':
      return 'Zabrak';
      break;
    case '23':
      return 'Tholothian';
      break;
    case '16':
      return 'Aleena';
      break;
    case '16':
      return 'Aleena';
      break;
    case '24':
      return 'Iktotchi';
      break;
    case '25':
      return 'Quermian';
      break;
    case '26':
      return 'Kel Dor';
      break;
    case '27':
      return 'Chagrian';
      break;
    case '28':
      return 'Geonosian';
      break;
    case '29':
      return 'Mirialan';
      break;
    case '30':
      return 'Clawdite';
      break;
    case '31':
      return 'Besalisk';
      break;
    case '32':
      return 'Kaminoan';
      break;
    case '33':
      return 'Skakoan';
      break;
    case '34':
      return 'Muun';
      break;
    case '35':
      return 'Togruta';
      break;
    case '36':
      return 'Kaleesh';
      break;
    case '37':
      return 'Pau\'an';
      break;
    default:
      return 'n/a';
      break;
  }

  return specie;
}

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
              { getSpecie(item.species) }
            </small>
          </li>
        </ul>
      </Card>
    )) }
  </Container>

);

export default Character;
