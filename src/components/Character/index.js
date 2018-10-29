import React, { Component } from 'react';
import { Container, Card } from './styles';
import Starship from '../../components/Starship';
import Modal from 'react-responsive-modal';
import axios from 'axios';

const getSpecie = (species) => {
  const specie = species.toString().substring(29, 31);
  switch (specie) {
    case '1/':
      return 'Human';
    case '2/':
      return 'Droid';
    case '3/':
      return 'Wookiee';
    case '4/':
      return 'Rodian';
    case '5/':
      return 'Hutt';
    case '6/':
      return 'Yoda\'s species';
    case '7/':
      return 'Trandoshan';
    case '8/':
      return 'Mon Calamari';
    case '9/':
      return 'Ewok';
    case '10':
      return 'Sullustan';
    case '11':
      return 'Neimodian';
    case '12':
      return 'Gungan';
    case '13':
      return 'Toydarian';
    case '14':
      return 'Dug';
    case '15':
      return 'Twi\'lek';
    case '16':
      return 'Aleena';
    case '17':
      return 'Vulptereen';
    case '18':
      return 'Xexto';
    case '19':
      return 'Toong';
    case '20':
      return 'Cerean';
    case '21':
      return 'Nautolan';
    case '22':
      return 'Zabrak';
    case '23':
      return 'Tholothian';
    case '24':
      return 'Iktotchi';
    case '25':
      return 'Quermian';
    case '26':
      return 'Kel Dor';
    case '27':
      return 'Chagrian';
    case '28':
      return 'Geonosian';
    case '29':
      return 'Mirialan';
    case '30':
      return 'Clawdite';
    case '31':
      return 'Besalisk';
    case '32':
      return 'Kaminoan';
    case '33':
      return 'Skakoan';
    case '34':
      return 'Muun';
    case '35':
      return 'Togruta';
    case '36':
      return 'Kaleesh';
    case '37':
      return 'Pau\'an';
    default:
      return 'n/a';
  }
}

export default class Character extends Component {
  state = {
    open: false,
    starship: []
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  async handleStarship(starship) {
    if (starship.length === 0){
      this.setState({
        starship: [
          {
            name: 'does not have',
            model: 'n/a',
            manufacturer: 'n/a',
            length: 'n/a',
            passengers: 'n/a',
            starship_class: 'n/a',
          }
        ]
      });
    } else {
      this.setState({
        starship: []
      });
      starship.map(async item => {
        try {
          const starshipResult = await axios.get(`${item}`);
          await this.setState({
            starship: [...this.state.starship, starshipResult.data]
          });
        } catch (error) {
          console.log(error);
        }
      });
    }
    this.onOpenModal();
  };

  render(){
    const { open } = this.state;
    return (
      <Container>
        { this.props.people.results.map(item => (
          <Card key={item.name} onClick={() => this.handleStarship(item.starships)}>
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
        <Modal showCloseIcon={false} open={open} onClose={this.onCloseModal} center>
          <h2>Starships description</h2>
          <Starship starship={this.state.starship} />
        </Modal>
      </Container>
    );
  }
};
