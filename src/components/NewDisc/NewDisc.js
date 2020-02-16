import React from "react";
import "./NewDisc.css";

function NewDisc(props){

    return <div className="container">
        <form>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Subject</label>
                <select className="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect2">Duration</label>
                <select multiple class="form-control" id="exampleFormControlSelect2">
                <option value="30">30 mins</option>
                <option value="60">1 hour</option>
                <option value="90">1.5 hours</option>
                <option value="120">2 hours</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </form>


    </div>
}

export default NewDisc;