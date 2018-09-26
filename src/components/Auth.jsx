import React, {Component} from 'react';
import users from '../json/users.json';
import news from '../json/news.json';

export default class Auth extends Component {
     handleLogOut = () => {
        this.props.logState(localStorage.clear())
    }
    
    render() {
        const author = localStorage.getItem('auth');
        let name = "";
        let surname = ""
        author && users.users.map(au => {
            if(au.login === author){
                name = au.name;
                surname = au.surname;
            }
        });
       
        return(
            <div>
                <div className="left">
                    {author && news[author].map(nw => {
                        return (
                            <div className="w_block news_color" key={nw.id}>
                                <div className="title">
                                   <b> {nw.title} </b>
                                </div>    
                                
                                <div>{nw.min_news}</div>                        
                            </div>
                        )
                    })              
                    }
                </div>
                <div className="right-form-block">
                    <div className="w_block">
                        <div className="title"> Control Panel</div>
                        <div>Name: {name} <br/> Surname: {surname}</div>
                        <div className="bottom_form_panel">
                            <button className="btn_out" onClick = {this.handleLogOut}>Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}