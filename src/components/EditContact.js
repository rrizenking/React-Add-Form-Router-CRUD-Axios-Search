import React, {useState} from "react";
import { useLocation } from "react-router-dom";

const EditContact = (props) => {
    
    const location = useLocation()
    console.log(location);
    const {id, name, email} = location.state;
    const [data, SetData] = useState({
        id,
        name,
        email
    })

    const handleClick = (e) => {   
        e.preventDefault();

        const name  = e.target.name;
        const value = e.target.value;

        SetData({
            ...data, [name]:value
        });
        
    }

    const update = (e) => {
        e.preventDefault();
        if(data.name === "" || data.email === "")
        {
            alert("All fileds are mandatory");
            return;
        }
        props.updateContactHandler(data);
        SetData({name:"", email:""});
    }
    
    return (
        <div className="ui main" method="post" onSubmit={update}>
            <br /><br />
            <h2>Update Contact</h2>
            <form className="ui form" >
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" onChange={handleClick} value={data.name} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" onChange={handleClick} value={data.email} />
                </div>
                <button className="ui button blue" type="submit">Update</button>
            </form>
        </div>
    )
}

/*
class EditContact extends React.Component {
    constructor(){
        super();
        //console.log(this.props);
        const {name, email} = location.state;
        
        this.state = {
            id,
            name,
            email
        }
    }

    update = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "")
        {
            alert("All fileds are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""});
        //this.props.history.push("/")
    }
    
    render(){
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" onChange={(e) => this.setState({name:e.target.value})} value={this.state.name} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" onChange={(e) => this.setState({email:e.target.value})} value={this.state.email} />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}

/*const LocationComponent = props => {
    const location = useLocation()
    return <EditContact location={location} {...props} /> // your component
}*/
/*
export function withRouter(Children){
    return(props)=>{

       const location  = {params: useLocation()};
       return <Children {...props}  location = {location}/>
   }
 }

export default withRouter(EditContact);*/

export default EditContact;