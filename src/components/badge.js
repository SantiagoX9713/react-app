import React from 'react';

import confLogo from '../images/badge-header.svg';
import './Styles/Badge.css';

class Badge extends React.Component {
    render(){
        return <div className='Badge'>
            <div className='Badge_header'>
                <img src={confLogo} alt="Logo de la Conferencia"/>
            </div>
            <div className="Badge_section-name">
                <img className="Badge_avatar" src={this.props.avatarUrl} alt="Avatar"/>
            <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
            </div>
            <div className="Badge_section-info">
                <h3>{this.props.profesion}</h3>
                <div>@{this.props.twitter}</div>
            </div>
            <div className="Badge_footer">
                <p>#PlatziConf</p>
            </div>
            </div>     
    }
}

export default Badge;