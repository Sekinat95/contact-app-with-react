import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import ListItem from './list-item';

class List extends Component {

    render(){
        return (
            <div className="list-group col-md-6 offset-md-1">
            {Object.keys(this.props.contacts).map(key => <ListItem 
                    key={key}
                    id={key}
                    fname={this.props.contacts[key].fname} 
                    lname={this.props.contacts[key].lname} 
                    phone={this.props.contacts[key].phone}
                    deleteContact={this.props.deleteContact}
            />)
        }
        </div>
        );

    }
}
export default List;