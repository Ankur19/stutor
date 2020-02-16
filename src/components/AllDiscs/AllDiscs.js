import React, {useState} from "react";
import "./AllDiscs.css";
import axios from "axios";

function AllDiscs(props){

    let userId=props.match.params.id.slice(3,);
    let places=[]
    let discussions = []
    const [allData, setAllData] = useState({})
    async function retreiveAllPending(){
        return new Promise((resolve, reject)=>{
            axios.get("http://localhost:5000/users/getId/"+userId)
            .then(resp=>{
                axios.get("http://localhost:5000/places/getPlaces/" + resp.data[0].college)
                .then(res=>{
                    res.data.forEach(place=>{
                        places.push(place.place);
                        discussions.push([]);
                        axios.get("http://localhost:5000/discussions/getPending/" + place._id)
                        .then(pendingDiscs=>{
                            pendingDiscs.data.forEach(disc=>{
                                axios.get("http://localhost:5000/topics/"+disc.topic)
                                .then(top=>{
                                    if(top.data.length===0){
                                        discussions[discussions.length-1].push({});
                                    }
                                    else{
                                        let obj = {start: disc.start_time, duration:disc.duration, max_attendees:disc.max_attendees,topic_name :top.data[0].topic_name,
                                            author : top.data[0].author,discussion : top.data[0].discussion_material,subject : top.data[0].subject}
                                        discussions[discussions.length-1].push(obj);
                                    }
                                    if(discussions.length===res.data.length && discussions[discussions.length-1].length===pendingDiscs.data.length){
                                        setAllData({places:places, discussion:discussions});
                                        resolve("done");
                                    }
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    retreiveAllPending();

    


    return <div className="container">
        <div className="join-all-pending"></div>
    </div>
}

export default AllDiscs;