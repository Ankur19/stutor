import React, {useState, useEffect} from "react";
import "./NewDisc.css";
import axios from "axios";
import DateTimePicker from 'react-datetime-picker';

function checkAvail(userId, currentTime, duration){
    
}

function NewDisc(props){
    let newSubjectOptions = []
    const[subjectOptions, setSubjectOptions] = useState([]);
    const [date, setDate] = useState(new Date());
    useEffect(()=>{
        axios.get("http://localhost:5000/users/getId/" + props.match.params.id.slice(3,))
        .then(userResp=> {
            axios.get("http://localhost:5000/branches/" + userResp.data[0].branch)
            .then(res=>{
                let subjectIds = res.data[0].subjects;
                async function retreiveSubdata(){
                    return new Promise((resolve, reject)=>{
                        subjectIds.forEach((sId, index)=>{
                            axios.get("http://localhost:5000/subjects/" + sId)
                            .then(sres=>{
                                newSubjectOptions.push(<option key={sres.data[0]._id} value={sres.data[0]._id}>{sres.data[0].subject_name + "-" + sres.data[0].subject_code}</option>);
                                if(index===subjectIds.length-1){
                                    setSubjectOptions(newSubjectOptions);
                                    resolve("done");
                                }
                            })
                        })
                    })
                }
                retreiveSubdata();
                
            })
        })
    }, []);
    
    function handleSubmit(e){
        document.getElementById("discerror").style.display="none";
        const subject = document.getElementById("subjectform").value;
        const topic = document.getElementById("topicform").value;
        const duration = document.getElementById("durationform").value;
        const discussionMaterial = document.getElementById("discmaterial").value;
        if(subject===""||topic===""||duration===""||discussionMaterial===""){
            document.getElementById("discerror").style.display="inline-block";
        }
        else{

        }
        e.preventDefault();
    }

    return <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="subjectform">Subject</label>
                <select className="form-control" id="subjectform">
                    {subjectOptions}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="topicform">Topic</label>
                <textarea className="form-control" id="topicform" rows="1"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="durationform">Duration</label>
                <select multiple className="form-control" id="durationform">
                    <option value="30">30 mins</option>
                    <option value="60">1 hour</option>
                    <option value="90">1.5 hours</option>
                    <option value="120">2 hours</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="discmaterial">Discussion material</label>
                <textarea className="form-control" id="discmaterial" rows="3"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="react-datetime-picker" >Time: </label>
                <DateTimePicker onChange={setDate} value={date} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div id="discerror" style={{display:"none", height:"3vh", width:"100%", borderRadius:"1vh", backgroundColor:"red", color:"white", lineHeight:"3vh",fontSize:"2vh"}}>Error.. Invalid data</div>
    </div>
}

export default NewDisc;