import { useEffect, useState } from "react"
import api from '../services/config'
import { ClipLoader } from "react-spinners"
function HomePage() {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setBlogs(await api.get("/posts"))
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchBlogs();
    }, [])
    return (
        <div>
            {blogs.length ?
                blogs.map(blog => <p key={blog.id}>{blog.title}</p>)
                :
                <div className="flex justify-center items-center h-[100vh]">
                    <ClipLoader color="#37BCF8" size="50"/>
                </div>
            }
        </div>
    )
}

export default HomePage