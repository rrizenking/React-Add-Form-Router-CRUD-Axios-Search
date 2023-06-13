import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png"

const CardContact = (props) => {
    const {id, name, email} = props.contact;
    
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="User Image"/>
            <div className="content">
                {/*<Link to={{pathname:`/contact/${id}`, state:{contact:props.contact} }}>*/}
                <Link to={`/contact/${id}`} state={{ name, email }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px"}} onClick={()=>{props.clickHandler(id)}}></i>

            <Link to={`/edit/`} state={{ id, name, email }}>
            <i className="edit alternate outline icon" style={{color:"blue", marginTop:"7px", marginLeft:"100px"}} ></i>
            </Link>
        </div>
    );
}

export default CardContact;