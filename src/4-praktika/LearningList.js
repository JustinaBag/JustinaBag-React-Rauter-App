import React from "react";
import Learning from "./Learning";
import {useState} from "react";
// import { v4 as uuidv4} from "uuid";

function LearningList() {
    const learningList = [
        {
            id: 1,
            img: "https://www.economist.com/img/b/800/450/90/sites/default/files/images/2015/09/blogs/economist-explains/code2.png",
            language: "Aš mokausi HTML",
            status: false,
        },
        {
            id: 2,
            img: "https://cloudspoint.xyz/wp-content/uploads/2020/02/CODE-1.jpg",
            language: "Aš mokausi CSS",
            status: false,
        },
        {
            id: 3,
            img: "https://media.edutopia.org/styles/responsive_2880px_16x9/s3/masters/d7_images/slates/rushkoff-codecademy-literacy.jpg",
            language: "Aš mokausi JS",
            status: false,
        },
    ];

const [postStatus, setPostStatus] = useState(learningList);

function changeStatus(id) {
    const updateStatus = [...postStatus];
    updateStatus.forEach((data) =>{
        if (data.id == id) {
            data.status = true;
        }
    });
    setPostStatus(updateStatus);
}

    const learningListData = postStatus.map((data) => {
        return (
            <Learning 
            // key={uuidv4()}
            id={data.id}
            lang={data.language}
            img={data.img}
            status={data.status}
            changeStatus={changeStatus}
            />
        );
    });

    return <div className="row text-center">{learningListData}</div>
}
export default LearningList;