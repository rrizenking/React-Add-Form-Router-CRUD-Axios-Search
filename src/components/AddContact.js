import React, {useState} from "react";
/*
const AddContact = (props) => {
    const [data, SetData] = useState({
        name:"",
        email:""
    })

    const handleClick = (e) => {   
        e.preventDefault();

        const name  = e.target.name;
        const value = e.target.value;

        SetData({
            ...data, [name]:value
        });
        
    }

    const add = (e) => {
        e.preventDefault();
        if(data.name === "" || data.email === "")
        {
            alert("All fileds are mandatory");
            return;
        }
        props.addContactHandler(data);
        SetData({name:"", email:""});
    }
    
    return (
        <div className="ui main" method="post" onSubmit={add}>
            <h2>Add Contact</h2>
            <form className="ui form" >
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" onChange={handleClick} value={data.name} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" onChange={handleClick} value={data.email} />
                </div>
                <button className="ui button blue" type="submit">Add</button>
            </form>
        </div>
    )
}
*/

class AddContact extends React.Component {
    state = {
        name:"",
        email:""
    }

    add = (e) => {
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
                <br /><br />
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
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

export default AddContact;