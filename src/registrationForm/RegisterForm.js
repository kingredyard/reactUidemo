import React from 'react';
import './style.css';


class RegisterForm extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["quote"] = "";
            fields["applicant"] = "";
            fields["quoteDate"] = "";
            fields["effectiveDate"] = "";
            fields["price"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["quote"]) {
            formIsValid = false;
            errors["quote"] = "*Please enter your Quote.";
        }

            if (!fields["applicant"]) {
                formIsValid = false;
                errors["applicant"] = "*Please enter applicant name.";
            }

            if (!fields["quoteDate"]) {
                formIsValid = false;
                errors["quoteDate"] = "*Please enter quote date.";
            }
            if (!fields["effectiveDate"]) {
                formIsValid = false;
                errors["effectiveDate"] = "*Please enter effective Date.";
            }

        if (!fields["price"]) {
            formIsValid = false;
            errors["price"] = "*select plan";
        }



        this.setState({
            errors: errors
        });
        return formIsValid;


    }



    render() {
        return (
            <div id="main-registration-container">
                <div id="register">

                    <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >


                        <table>
                            <th colSpan="6">Quote  page</th>
                            <tr>
                                <td>Quote</td>
                                <td><input type="text" name="quote" value={this.state.fields.quote} onChange={this.handleChange} />
                                    <div className="errorMsg">{this.state.errors.quote}</div></td>
                                <td>Status</td>
                                <td>
                                    <select>
                                                <option>Pending</option>
                                                <option>Issued</option>
                                        </select>
                                </td>
                                <td>Applicant</td>
                                <td>
                                    <input type="text" name="applicant" value={this.state.fields.applicant} onChange={this.handleChange} />
                                    <div className="errorMsg">{this.state.errors.applicant}</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Quote Date</td>
                                <td><input type="text" name="quoteDate" value={this.state.fields.quoteDate} onChange={this.handleChange} />
                                    <div className="errorMsg">{this.state.errors.quoteDate}</div></td>
                                <td>Effective Date</td>
                                <td><input type="text" name="effectiveDate" value={this.state.fields.effectiveDate} onChange={this.handleChange} />
                                    <div className="errorMsg">{this.state.errors.effectiveDate}</div></td>
                                <td></td>
                                <td><input type="radio" value="Basic" name="price" onChange={this.handleChange}/> Basic : $680.00
                                    <input type="radio" value="preferred" name="price" onChange={this.handleChange}/> Preferred : $850.00
                                    <input type="radio" value="premier" name="price" onChange={this.handleChange}/> Premier : $680.00

                                    <div className="errorMsg">{this.state.errors.price}</div></td>
                            </tr>

                        </table>





                        <input type="submit" className="button"  value="Save"/>

                    </form>
                </div>
            </div>

        );
    }


}


export default RegisterForm;