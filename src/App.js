import React from "react";
import axios from "axios";

import EmployeeForm from "./components/EmployeeFormV4";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        name: "",
        id: "",
        department: "",
        dateOfJoining: "",
        gender: "",
        isContractor: "",
        age: ""
      }
    };
  }
  componentDidMount() {
    this.lodaInitialData();
  }

  lodaInitialData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const employee = res.data[0];
      this.setState({
        initialValues: {
          name: employee.name,
          id: employee.id,
          department: "",
          gender: "male"
        }
      });
    });
  };

  render() {
    return (
      <div className="App">
        <EmployeeForm initialValues={this.state.initialValues} />
      </div>
    );
  }
}

export default App;
