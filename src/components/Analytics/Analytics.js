import React from "react";
import "./Analytics.css";

function Analytics(){
    return <div>
        <img className="img-fluid"alt="wordc" src={process.env.PUBLIC_URL+"/worldcloud_materials.png"}></img>
        <img className="img-fluid"alt="wordt" src={process.env.PUBLIC_URL+"/worldcloud_topics.png"}></img>
    </div>
}

export default Analytics;