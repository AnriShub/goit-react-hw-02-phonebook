import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import React, { Component } from 'react';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        e.target.reset(); 
    }

    render() {
        return (
            <form className={css.form} onSubmit={this.handleSubmit}>
                <label className={css.formLabel}>Name
                    <input className={css.formName}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        onChange={this.handleChange}
                    />
                </label>

                <label className={css.formLabel}>Number
                    <input className={css.formNumber}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        onChange={this.handleChange}
                    />
                </label>
                <button className={css.formBtn} type='submit'>Add contact</button>
            </form>
        )
    }
}

ContactForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };