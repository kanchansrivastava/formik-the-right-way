import React from "react";

class ErrorMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="error" style={{ color: "red" }}>
                {this.props.error}
            </div>
        );
    }
}

export default ErrorMessage;
