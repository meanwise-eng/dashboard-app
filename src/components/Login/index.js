// @flow
import React, { Component } from "react";
import { render } from "react-dom";

type Props = {};
type State = {
    email?: string,
    password?: string,
};

export default class Login extends Component {
    state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e: Event) => {
        if (e.target instanceof HTMLInputElement) {
            const { name, value } = e.target;
            this.setState({
                [name]: value
            });
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="modal">
                    <div className="login">
                        <div className="cover">
                            <h2>Login</h2>
                        </div>
                        <div className="login__login-element">
                            <div className="input-element">
                                <label htmlFor="email" className="fa fa-envelope-o"></label>
                                <input
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    placeholder="Email"
                                    onChange={this.handleChange} />
                            </div>
                            <div className="input-element">
                                <label htmlFor="password" className="fa fa-lock"></label>
                                <input
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.handleChange} />
                            </div>

                            <div className="solid-btn solid-btn--rect">Login</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
