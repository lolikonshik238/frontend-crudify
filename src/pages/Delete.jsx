import { Link, useNavigate, useParams } from "react-router-dom";
import backIcon from "../assets/images/back.svg";
import { a } from "../services/axiosInstanse";
import { HOME } from "../services/consts";

function Delete(){

    const {id} = useParams();
    const navigate = useNavigate();

    async function handleDelete() {
        try {
            await a.delete(`infos/post/delete/${id}`);
            navigate(HOME);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="block">
            <div className="container">
                <Link to={HOME} className="fixed-top-left">
                    <img src={backIcon} alt="Back"/>
                </Link>
                <h1 className="title"> Reading Zametka </h1>
                <p className="desciption">Delete Note?</p>
                <button onClick={handleDelete} className="fixed-bottom-delete"> Delete Note?</button>
            </div>
        </div>
    );
}

export default Delete;