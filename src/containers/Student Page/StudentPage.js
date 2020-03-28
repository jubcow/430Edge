import React, {Component} from 'react';
import "./StudentPage.css";
import StudentLayout from '../../hoc/Student Layout/StudentLayout';

class StudentPage extends Component {

    render() {
        return (
            <StudentLayout>
                <div className="StudentPage">
                    <h1>Student Page</h1>
                </div>
            </StudentLayout>
        )
    }
}

export default StudentPage;