import React, {useState} from "react";

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

/*
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
    }

    handleNameClick = (e) => {   
        e.preventDefault();
        console.log(e.target)
        this.setState({
            name:e.target.value
        });
    }

    handleEmailClick = (e) => {   
        e.preventDefault();
        console.log(e.target)
        this.setState({
            email:e.target.value
        });
    }
    
    render(){
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" onChange={this.handleNameClick} value={this.state.name} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" onChange={this.handleEmailClick} value={this.state.email} />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}
*/
export default AddContact;