import React, {Component} from 'react';

import Form from './form';
import List from './list';

class App extends Component{
    constructor(){
        super();
       
        //sets initial dummy state
        this.state = {
            contacts: {
               item: {
                    fname: 'sekinat',
                    lname: 'yahya',
                    phone: '08165981703'

                },
                item2: {
                    fname: 'sofiyah',
                    lname: 'aliyu',
                    phone: '095988354889'
                }
            }
            
        }
        //whenever this.add/this.del are called, always bind them to the App 'global scope'
       this.addContact = this.addContact.bind(this);
       this.deleteContact = this.deleteContact.bind(this);
    }
addContact(id, fname, lname, phone){
    //... = spread i.e. convert the array into a list(object)
    const contacts = {...this.state.contacts};
    contacts[id]= {fname, lname, phone};
    this.setState({contacts});

}
deleteContact(id){
    const contacts = {...this.state.contacts};
    delete contacts[id];
    this.setState({contacts});
}

    
    render() {
      //why did we call addcontact and removecontact on the jsx 
    return (
         <div>
          <h2>Contact App</h2>
          <hr/>
            <div className="row">
              <Form addContact={this.addContact}/>
              <List contacts={this.state.contacts}
               deleteContact={this.deleteContact}/>
          </div>
         </div>
    );
  }
}

export default App;