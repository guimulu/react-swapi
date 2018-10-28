import React, { Component } from 'react';
import api from '../../services/api';
import axios from 'axios';
import logo from '../../assets/logo.png';
import {Container, Navigation} from './styles';
import Character from '../../components/Character'

export default class Main extends Component {
  state = {
    loadingNext: false,
    loadingPrev: false,
    people: {
      "results": [
        {
          "name": "Loading..",
          "height": "...",
          "mass": "...",
          "eye_color": "...",
          "gender": "...",
          "species": [
            "..."
          ],
        }
      ]
    }
  };

  handlePeople = async () => {
    try {
      const response = await api.get(`/people/`);
      console.log(response.data);
       this.setState({
         people: response.data,
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

  render(){
    return (
      <Container>
        <img src={logo} alt="Star Wars" width="200"></img>
        <Character people={this.state.people} />
        <Navigation>
          <button onClick={this.previousPeople}>{this.state.loadingPrev ? <i className="fa fa-spinner fa-pulse" /> : 'Prev'}</button>
          <button onClick={this.nextPeople}>{this.state.loadingNext ? <i className="fa fa-spinner fa-pulse" /> : 'Next'}</button>
        </Navigation>
      </Container>
    );
  }
}
