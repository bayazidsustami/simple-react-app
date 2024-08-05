import React from "react";

class Title extends React.Component {
    
    constructor() {
        super();
        this.state = {
            title: "My First React App",
            subtitle: "Create with enjoyable"
        }
    }

    render(){
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.subtitle}</p>
            </div>
        )
    }
}

export default Title;