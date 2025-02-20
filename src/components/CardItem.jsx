import { Link } from "react-router-dom";
import { READ } from "../services/consts";
import { formatDate } from "../services/formatDate";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { a } from "../services/axiosInstanse";
import { HOME } from "../services/consts";


function CardItem({ post }) {
    if (!post) {
        return <div className='card-item'>Ошибка: пост не найден</div>;
    }

    console.log("Полученный post:", post);

    const { id } = useParams();
    const [is_finished, setIsFinished] = useState(post.is_finished);
    

    useEffect(() => {
        async function fetchPost() {
            try {
                const res = await a.get(`infos/detail/${id}`);
                setIsFinished(res.data.is_finished);
            } catch (e) {
                console.log(e);
            }
        }
        fetchPost();
    }, [id]);
    console.log("Отправка запроса на id:", post.id);

    async function handleCheckboxChange(e) {
        const newValue = e.target.checked;
        setIsFinished(newValue); // Обновляем состояние

        try {
            await a.put(`infos/post/update/${post.id}`, { is_finished: newValue });
        } catch (err) {
            console.log(err);
        }

        console.log("Новое состояние:", newValue);

    }

    

    return (
        <div className="card-list">
            <div className="blankDiv">
                <Link to={READ.substring(0, READ.length - 3) + post.id} className='ssylka'>
                <h3 className={`card-item__title ${is_finished ? "crossed" : ""}`}>
                    { post.content ? post.content : <Skeleton />}
                </h3>

                </Link>
                <span className='card-item__date'>{formatDate(post.created_at)}</span>

                <div className="is_finished">
                    <input
                        type="checkbox"
                        id={`check-${post.id}`}
                        checked={is_finished} 
                        onChange={handleCheckboxChange} // Обновленный обработчик
                    />
                    <label htmlFor={`check-${post.id}`} className="knopka"></label>
                </div>
            </div>
        </div>
    );
}

export default CardItem;
