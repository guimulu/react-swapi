import React, { Component } from 'react';
import api from '../../services/api';
import axios from 'axios';
import logo from '../../assets/logo.png';
import {Container, Navigation} from './styles';
import Character from '../../components/Character';
import Starship from '../../components/Starship';
import Modal from "react-responsive-modal";

export default class Main extends Component {
  state = {
    open: false,
    loadingNext: false,
    loadingPrev: false,
    people: {
      results: [
        {
          name: "Loading..",
          height: "...",
          mass: "...",
          eye_color: "...",
          gender: "...",
          species: [],
        }
      ]
    },
    starship: {
      results: [
        {
          name: "X-wing",
          model: "T-65 X-wing",
          manufacturer: "Incom Corporation",
          length: "12.5",
          passengers: "0",
          hyperdrive_rating: "1.0",
          starship_class: "Starfighter"
        },
        {
          name: "X-wing",
          model: "T-65 X-wing",
          manufacturer: "Incom Corporation",
          length: "12.5",
          passengers: "0",
          hyperdrive_rating: "1.0",
          starship_class: "Starfighter"
        }
      ]
    }
  };

  handleStarships = async (starships) => {
    try {
      const results = [];
      starships.map(item => (
        console.log(item)
      ));
    } catch (error) {
      console.log(error);
    }
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handlePeople = async () => {
    try {
      const { data : people } = await api.get(`/people/`);
      console.log(people);

      this.setState({
        people: people,
      });
    } catch (error) {
      console.log(error);
    }
  }

  nextPeople = async () => {
    this.setState({ loadingNext: true });
    try {
      if (this.state.people.next != null) {
        const response = await axios.get(`${this.state.people.next}`);
        console.log(response.data);
         this.setState({
           people: response.data
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        loadingNext: false
      });
    }
  }

  previousPeople = async () => {
    this.setState({ loadingPrev: true });
    try {
      if (this.state.people.previous != null) {
        const response = await axios.get(`${this.state.people.previous}`);
        console.log(response.data);
         this.setState({
           people: response.data
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        loadingPrev: false
      });
    }
  }

  componentDidMount(){
    this.handlePeople();
  }

  openStarship = () => {
    console.log("ocococoocodocdoscosdo");
  };

  render(){
    const { open } = this.state;
    return (
      <Container>
        <img src={logo} alt="Star Wars" width="200" onClick={this.onOpenModal}></img>
        <Character people={this.state.people} onClick={this.openStarship} />
        <Navigation>
          <button onClick={this.previousPeople}>{this.state.loadingPrev ? <i className="fa fa-spinner fa-pulse" /> : 'Prev'}</button>
          <button onClick={this.nextPeople}>{this.state.loadingNext ? <i className="fa fa-spinner fa-pulse" /> : 'Next'}</button>
        </Navigation>

        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Starships description</h2>
          <Starship starship={this.state.starship} />
        </Modal>
      </Container>
    );
  }
}
