import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { a } from "../services/axiosInstanse";
import Skeleton from "../components/Skeleton";

function CardList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await a.get("infos/");
                setPosts(res.data);
            } catch (e) {
                console.error("Ошибка загрузки данных:", e);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    return (
        <div className="card-list">
            {loading ? (
                Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton key={index} />
                ))
            ) : (
                posts.map((post) => (
                    <CardItem key={post.id} post={post} />
                ))
            )}
        </div>
    );
}

export default CardList;
