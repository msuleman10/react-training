import React,{Component} from 'react';

class ClassB extends Component {

    constructor (state){
        super(state);
        this.props= state;
        this.state={
            names : "abdul rehman",
            age : 5
        }
    }
    
    render() { 
        return ( 
            <>
                <h1>{this.props.names} {this.props.age}</h1>
                <h1>{this.state.names} {this.state.age}</h1>
            </>
        );
    }
}

export default ClassB;