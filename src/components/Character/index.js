import React, { Component } from 'react';
import { Container, Card } from './styles';
import Starship from '../../components/Starship';
import Modal from 'react-responsive-modal';
import axios from 'axios';

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
                  { item.species }
                </small>
              </li>
            </ul>
          </Card>
        )) }
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Starships description</h2>
          <Starship starship={this.state.starship} />
        </Modal>
      </Container>
    );
  }
};
