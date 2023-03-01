import React,{Component} from 'react';

class ClassB extends Component {

    constructor (props){
        super(props);
        this.props=props;
    }
    
    render() { 
        return ( 
            <>
                <h1>{this.props.names} {this.props.age}</h1>
            </>
        );
    }
}

export default ClassB;