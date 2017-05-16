import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'


class ApplicationForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      company: "",
      date: ""
    }
  }

  handleSubmit = data => this.props.onSubmit(data)
  handleClose = () => this.props.onClose()

  handleChange(event) {
    if (event.target.name === 'company') {
      this.setState({
        company: event.target.value
      })
    } else if (event.target.name === 'date') {
      this.setState({
        date: event.target.value
      })
    }
  }

  render() {
    const {handleSubmit, onClose} = this.props
    return (
      <form className="uk-form-blank" onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="company">Company:</label>
          <Field
            name="company"
            value={this.state.company}
            onChange={this.handleChange.bind(this)}
            className="uk-input uk-width-medium uk-form-blank uk-form-controls"
            component="input"
            id="company"
            type="text"
            placeholder="(Company Name)"
          />
          <label className="uk-form-label" htmlFor="date">Date:</label>
          <Field
            name="date"
            value={this.state.date}
            onChange={this.handleChange.bind(this)}
            className="uk-input uk-width-small uk-form-controls uk-form-blank"
            component="input"
            id="date"
            type="date"
          /><br />
          <div className="uk-position-bottom-center">
            <input type="submit" className="uk-button uk-margin-bottom uk-margin-right uk-button-default" value="Save" />
            <button className="uk-button uk-margin-bottom uk-button-default" onClick={this.handleClose}>Cancel</button>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'application'
})(ApplicationForm);