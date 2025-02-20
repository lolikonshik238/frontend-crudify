import { Link } from "react-router-dom";
import { READ } from "../services/consts";
import { formatDate } from "../services/formatDate";

function Wrapper({ post }) {
    if (!post) {
        return <div className='card-item'>Ошибка: пост не найден</div>;
    }
    console.log("Полученный post:", post);
    return (
        <div id="list-container">
        <ul id="notes-list">
          <li>
            <Link to={READ.substring(0, READ.length - 3) + post.id} className='card-item'>
              <h3 className='card-item__title'>{post.content}</h3>
              <span className='card-item__date'>{formatDate(post.created)}</span>
            </Link>
          </li>
        </ul>
      </div>
      );
};


export default Wrapper;