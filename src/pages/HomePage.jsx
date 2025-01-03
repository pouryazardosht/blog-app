import { useEffect, useState } from "react"
import api from '../services/config'
import { ClipLoader } from "react-spinners"
import Card from "../components/Card"
function HomePage() {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const localBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
                const apiBlogs = await api.get('/posts');
                const combinedBlogs = [...localBlogs, ...apiBlogs];
                setBlogs(combinedBlogs);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchBlogs();
    }, [])
    console.log(blogs);
    return (
        <div className="md:px-10">
            <h1 className="text-4xl font-bold ml-5 my-8"> Blogs</h1>
            {
                blogs.length ?
                    <div className="flex flex-col items-center gap-8">
                        {
                            blogs.map(blog =>
                                <Card key={blog.id} data={blog} />
                            )
                        }
                    </div >
                    :
                    <div className="flex justify-center items-center h-[100vh]">
                        <ClipLoader color="#37BCF8" size="50px" />
                    </div>
            }
        </div >
    )
}

export default HomePage