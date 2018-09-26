import React, { Component } from 'react';

export default class Register extends Component {
    constructor(props){
        super(props);
       
    }

    handelModal = () => {
        this.props.modal(false);
    }

    handelSubmit = () => {
        document.querySelector(".pass").value === document.querySelector(".re_pass").value && console.log('well done!')
    }


    render() {



        return(
            <div className="modal">
                <form action="#" method="get">
                    <input type="text" placeholder="login" required />
                    <input type="text" className="pass" placeholder="password" required />
                    <input type="text" className="re_pass" placeholder="re-password" required />
                    <input type="text" placeholder="mail" required />
                    <input type="text" placeholder="name"/>
                    <input type="text" placeholder="surname"/>
                    <div className="bottom_form_panel">
                        <button onClick={this.handelSubmit}>Submit</button><button onClick={this.handelModal}>close</button>
                    </div>
                </form>
            </div>
        );
    }
}