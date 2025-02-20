import backIcon from "../assets/images/back.svg";
import deleteIcon from "../assets/images/delete.svg";
import changeIcon from "../assets/images/change.svg";
import plusIcon from "../assets/images/plus.svg";
import { Link, useParams } from "react-router-dom";
import { CREATE, DELETE, HOME, UPDATE } from "../services/consts";
import { useEffect, useState } from "react";
import { a } from "../services/axiosInstanse";


function Read(){
    const {id}  = useParams();
    const [post, setPost] = useState({});

    useEffect(() =>{
        async function fetchPost() {
            try {
                const res = await a.get(`infos/detail/${id}/`);

                setPost(res.data);
                console.log(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchPost();
    }, [id]);

    return(
        <div className="block">
            <div className="container">
                <Link to={HOME} className="fixed-top-left">
                    <img src={backIcon} alt="Back"/>
                </Link>
                <h1 className="title"> Reading Zametka </h1>
                <span className="description">{post.content}</span>
                <div className="fixed-menu-bottom">
                    <Link to={DELETE.substring(0, DELETE.length - 3) + post.id} className="delete-button">
                        <img src={deleteIcon} alt="delete"/>
                    </Link>
                    <Link to={UPDATE.substring(0, UPDATE.length - 3) + post.id} className="change-button">
                        <img src={changeIcon} alt="delete"/>
                    </Link>
                    <Link to={CREATE} className="plus-button">
                        <img src={plusIcon} alt="delete"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Read;