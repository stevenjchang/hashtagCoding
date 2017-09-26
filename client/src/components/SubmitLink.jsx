import React from 'react'
import axios from 'axios'

class SubmitLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      url: '',
      image: '',
      type: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    console.log('name =>', event.target.name, 'value =>', event.target.value);
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.input);
    event.preventDefault();
    axios.post('/db/post', 
      {example: "text"}
    )
      .then((result) => {
        alert('link successfully submitted:' + result );
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <br></br>
        <label>
          Title:
          <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
        </label>
        <br></br>
        <label>
          Url:
          <input name="url" type="text" value={this.state.url} onChange={this.handleChange} />
        </label>
        <br></br>
        <label>
          Image:
          <input name="image" type="text" value={this.state.image} onChange={this.handleChange} />
        </label>
        <br></br>
        <label>
          Type:
          <input name="type" type="text" value={this.state.type} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <p>{this.state.name}</p>
        <p>{this.state.title}</p>
        <p>{this.state.url}</p>
      </form>
    );
  }
}

export default SubmitLink
