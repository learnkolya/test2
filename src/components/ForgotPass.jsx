import React, { Component } from 'react';

export default class Register extends Component {
    constructor(props){
        super(props);
       
    }

    handelModal = () => {
        this.props.modalPass(false);
    }

    
    render() {



        return(
            <div className="modal">
                <form action="#" method="get">                    
                    <input type="text" placeholder="mail" required /> 
                    <div className="bottom_form_panel">
                        <button /*onClick={this.handelSubmit}*/>Submit</button><button onClick={this.handelModal}>close</button>
                    </div>
                </form>
            </div>
        );
    }
}