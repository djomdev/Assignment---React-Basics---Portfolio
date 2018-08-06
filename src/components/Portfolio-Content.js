import React from 'react';
import Header from './Header';
import Summary from './Summary';
import Contact from './Contact-Info';

class Content extends React.Component{
    render(){
        return(
            <div className="profile-content">
            <Header />
            <Summary />
            <Contact />
            </div>
        );
    }
}

export default Content;