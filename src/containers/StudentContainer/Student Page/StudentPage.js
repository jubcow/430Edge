import React, {Component} from 'react';
import "./StudentPage.css";
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
        var loadedName = 'student name';
        // get request to server here

        // set state here
        this.setState({
            studentName: loadedName
        });
    }

    render() {
        return (
            <StudentLayout name={this.state.studentName} >
                <div className="StudentPage">
                    <h1>Student Page</h1>

                    <RecentActivity />
                    <CurrentTasks />
                </div>
            </StudentLayout>
        )
    }
}

export default StudentPage;