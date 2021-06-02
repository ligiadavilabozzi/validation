import React, { Component } from 'react';
import { CpfMask } from './masks/CpfMask'
import { RgMask } from './masks/RgMask'
import {NifMask} from './masks/NifMask'
import {SsnMask} from './masks/SsnMask'
import {CnpjMask} from './masks/CnpjMask'

export class Documents extends Component {
  constructor(props) {
    super(props)
    this.state = { cpf: '', rg:'', nif:'', cnpj:''}
    this.handlechange = this.handlechange.bind(this)
  }

  handlechange() { }

  render() {
  
     const { cpf, rg, nif, cnpj, ssn} = this.state
    return (
      <div className="App">
        <label >CPF:</label>
        <input 
          maxLength='14'
          name='cpf'
          value={cpf}
          onChange={(event)=> this.setState({ cpf: CpfMask(event.target.value)})}
        />
        <label>RG:</label>
        <input 
          maxLength='10'
          name='rg'
          value={rg}
          onChange={(e)=>this.setState({rg:RgMask(e.target.value)})}
        />
          <label>CNPJ:</label>
        <input 
          maxLength='18'
          name='cnpj'
          value={cnpj}
          onChange={(ev)=>this.setState({cnpj:CnpjMask(ev.target.value)})}
        />
        <br></br>
           <label>NIF:</label>
        <input 
          maxLength='9'
          name='nif'
          value={nif}
          onChange={(e)=>this.setState({nif:NifMask(e.target.value)})}
        />
          <label>SSN:</label>
        <input 
          maxLength='11'
          name='ssn'
          value={ssn}
          onChange={(ev)=>this.setState({ssn:SsnMask(ev.target.value)})}
        />
</div>
    )
  }
}

