import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className='card card-body mt-4 mb-4'>
        <h1>Add Lead Form</h1>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Name</label>
            <input
              type='text'
              className='form-control'
              name='name'
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='text'
              className='form-control'
              name='email'
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className='form-group'>
            <label>Message</label>
            <input
              type='text'
              className='form-control'
              name='message'
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
