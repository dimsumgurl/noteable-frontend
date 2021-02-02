import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <div class="container mt-5">
                <div class="card">
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="usernameInput">Username</label>
                                <input type="text" class="form-control" id="usernameInput" />
                            </div>
                            <div class="form-group">
                                <label for="passwordInput">Password</label>
                                <input type="password" class="form-control" id="passwordInput" />
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="rememberCheck" />
                                <label class="form-check-label" for="rememberCheck">Remember Me</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
