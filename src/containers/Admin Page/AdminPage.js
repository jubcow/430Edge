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
                fetch('http://35.192.57.209:8000/submissions', {
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
			<div className="row">
                                <div class ="column">
					{this.state.info.map(info => <div>{info.UMWID}</div>)}
				</div>
				<div class ="column">
					{this.state.info.map(info => <div>{info.Fullname}</div>)}
				</div>
				<div class ="column">
					{this.state.info.map(info => <div>
					{info.TaskName}
					<form>
						<div className="radio">	
							<label>
								<input type="radio" value ={info.TaskID} />
								Option
							</label>
						</div>
					</form></div>)}
				</div>
			</div>
             	</div>
        )
    }
}

export default AdminPage;
