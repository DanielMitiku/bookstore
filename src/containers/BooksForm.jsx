import React from 'react';
import { createBook } from '../actions';
import { connect } from 'react-redux';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
    this.initialState = {
      title: '',
      category: this.categories[0],
    }
    this.state = {...this.initialState};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.title && this.state.category) {
      this.props.createBook(this.state);
      this.setState({...this.initialState});
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
        <select name="category" onChange={this.handleChange} value={this.state.category}>
          {this.categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input type="submit" name="submit" />
      </form>
    );
  };
}

const mapDispatchToProps = dispatch => ({ createBook: (book) => dispatch(createBook(book)) });

export default connect(null, mapDispatchToProps)(BooksForm);
