import React, { Component } from 'react';

export class Countries extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'pt'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('País escolhido: ' + this.state.value);
      event.preventDefault();
    };
    
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Escolha seu País: 
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="pt">Portugal</option>
              <option value="br">Brasil</option>
              <option value="eua">Estados Unidos</option>
            </select>
          </label>
        </form>
        
      );
    }
  }
