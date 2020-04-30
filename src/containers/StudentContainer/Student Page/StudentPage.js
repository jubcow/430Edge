import React, {Component} from 'react';
import "./StudentPage.css";
import jsCookie from "js-cookie";
import StudentLayout from '../../../hoc/Student Layout/StudentLayout';
import RecentActivity from '../../../components/StudentComponents/RecentActivity/RecentActivity';
import CurrentTasks from '../../../components/StudentComponents/CurrentTasks/CurrentTasks';

// main page for the student account
// gets information from server and pass down as props to child components
class StudentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: null
        }
    }

    // when page loads, get information from server and load into state
    componentDidMount() {
        let self = this;
        var loadedName = jsCookie.get("fullname");
        // get request to server here

        // set state here
        this.setState({
            studentName: loadedName
        });

        fetch('http://35.192.57.209:8000/submissions', {
            method: 'GET'
            }).then(function(response) {
            if (response.status >= 400) {
            throw new Error("Bad response from server");
            }
            return response.json(); 
            })
            .then(function(data) {
                console.log(data);
                self.setState({info: data});
            })
            .catch(err => {
            console.log('caught it!',err);
        })
    }
    
    render() {
        
        // temp until retrieval from backend
        let recentTasks = [
            "Sign up for the EDGE program",
            "Attend a job fair",
            "Attend a resume workshop",
            "Build a resume"
        ]
        let currentTasks = [
            "Apply for an internship",
            "Attend a resume workshop",
            "Create a LinkedIn account",
            "Apply for a job"
        ]

        var moduleProgress = {
            exploreProgress: 100,
            developProgress: 70,
            growProgress: 35,
            executeProgress: 15
        }
        
        return (
            <StudentLayout 
                name={this.state.studentName}
                recent={recentTasks}
                current={currentTasks} 
                modules={moduleProgress}
            >
                
            </StudentLayout>
        )
    }
}

export default StudentPage;