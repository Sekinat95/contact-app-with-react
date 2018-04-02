import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
class Form extends Component {
    constructor(){
        super();
 //initialise the state 
        this.state={
            fname: '',
            lname: '',
            phone: ''
        }
        //this.onChange = this.onChange.bind(this);
    }
    //function to handle an event change on app
// onChange(e){
//     //sets a new key-value pair of the input data
//     this.setState({[e.target.name]: e.target.value});

// }

handleSubmit(e){
    e.preventDefault();
    const {fname, lname, phone} = this.state;
    const id = Date.now();

    if(fname!==""&& lname!==""&& phone!==""){
        this.props.addContact(id,fname,lname,phone);
        this.setState({fname: '', lname: '', phone: ''});
    }
}
    render(){
        //render function returns some jsx
        return (
        <form className="col-md-5" onSubmit={(e)=> this.handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="fname">First Name:</label>
                    <input type="text"
                    name="fname"
                    className="form-control"
                    value={this.state.fname}
                    onChange={event => this.setState({fname: event.target.value})}
                    />
            </div>
            <div className="form-group">
                <label htmlFor="fname">last  Name:</label>
                    <input type="text"
                    name="lname"
                    className="form-control"
                    value={this.state.lname}
                    onChange={event => this.setState({lname: event.target.value})}
                    />
            </div>
            <div className="form-group">
                <label htmlFor="fname">phone:</label>
                    <input type="text"
                    name="phone" 
                    className="form-control"
                    value={this.state.phone}
                    onChange={event => this.setState({phone: event.target.value})}
                    />
            </div>
            <button type="submit" className="btn btn-outline-primary" > Add contact </button>
        </form>
    );
    }
    
}


export default Form;
