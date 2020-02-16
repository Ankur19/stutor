import React from "react";
import "./NewDisc.css";

function NewDisc(props){

    

    return <div className="container">


        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email" className="control-label col-sm-2">Email</label>
                <input type="email" className="form-control" id="email" placeholder="abc@def.com" value={email} onChange={handleEmailChange}></input>
            </div>
            <div className="form-group">
            <label htmlFor="pwd" className="control-label col-sm-2">Password</label>
            <input id="pwd" className="form-control" type="text" placeholder="123456789" value={password} onChange={handlePasswordChange}></input>
            
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>


    </div>
}

export default NewDisc;