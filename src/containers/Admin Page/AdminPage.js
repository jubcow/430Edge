import React from 'react';

import "./AdminPage.css";

class AdminPage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        info: []
                }
        }

        componentDidMount() {
                let self = this;
                fetch('http://35.192.57.209:8000/test', {
                        method: 'GET'
                        }).then(function(response) {
                        if (response.status >= 400) {
                        throw new Error("Bad response from server");
                        }
                        return response.json();
                        }).then(function(data) {
                        self.setState({info: data});
                        }).catch(err => {
                        console.log('caught it!',err);
                        })
        }
	render() {
                return (
                        <div className="AdminPage">
                        <center>
                                {this.state.info.map(info => <div>{info.Email}</div>)}
                        </center>
                	</div>
        )
    }
}

export default AdminPage;
