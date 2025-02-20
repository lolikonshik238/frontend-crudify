import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {a} from "../services/axiosInstanse";
import { HOME } from "../services/consts";
function CardForm(){

    const [content, setContent] = useState("");
    const navigate = useNavigate(); 

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await a.post('infos/post/', { content });
            navigate(HOME);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
            className="form-control" rows="30" cols="10" placeholder="Write your plan please"></textarea>
            <button className="submit-primary-button" type="submit">Save changes</button>
        </form>
    );
}

export default CardForm;