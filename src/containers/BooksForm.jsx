import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';
import categories from '../utils';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.categories = categories;
    this.initialState = {
      title: '',
      category: this.categories[0],
    };
    this.state = { ...this.initialState };

    this.handleSubmit = event => {
      event.preventDefault();
      const { createBook } = this.props;
      const { title, category } = this.state;
      if (title && category) {
        createBook(this.state);
        this.setState({ ...this.initialState });
      }
    };

    this.handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
  }

  render() {
    const { title, category } = this.state;
    return (
      <form className="books-form" onSubmit={this.handleSubmit}>
        <h3 className="title">ADD NEW BOOK</h3>
        <div className="input-wrapper">
          <input type="text" name="title" onChange={this.handleChange} value={title} />
          <select name="category" onChange={this.handleChange} value={category}>
            {this.categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input className="submit-btn" type="submit" name="submit" />
        </div>
      </form>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({ createBook: book => dispatch(createBook(book)) });

export default connect(null, mapDispatchToProps)(BooksForm);
