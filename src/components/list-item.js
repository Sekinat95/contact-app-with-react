import React, {Component} from 'react';
//import ReactDOM from 'react-dom';

class ListItem extends Component{

    render(){
        return(
        <li style={{display: 'flex'}} className="list-item-group">
                    <div style={{flex: 1}}>
                        <h4>{`${this.props.fname} ${this.props.lname}`}</h4>
                        <div>{this.props.phone}</div>
                    </div>
                    <button className="btn btn-outline-danger"
                    onClick={()=>this.props.deleteContact(this.props.id)}
                    >Delete
                    </button>
        </li>
) ;
    }
}
export default ListItem;