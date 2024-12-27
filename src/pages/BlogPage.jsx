import { useEffect, useState } from "react";
import { useParams } from "react-router"
import api from '../services/config'
import { ClipLoader } from "react-spinners";
function BlogPage() {
    const { id } = useParams();
    const [blog, setBlog] = useState()
    useEffect(() => {
        const fetchBlog = async (id) => {
            try {
                setBlog(await api.get(`/posts/${id}`))
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchBlog(id);
    }, [id])
    return (
        <>
            {
                blog ?
                    <section className="flex justify-center items-center h-[100vh]">
                        <div>

                            <h1 className="text-[18px] md:text-xl font-semibold ">{blog.title}</h1>
                        </div>
                    </section>
                    :
                    <div className="flex justify-center items-center h-[100vh]">
                        <ClipLoader color="#37BCF8" size="50px" />
                    </div>
            }
        </>
    )
}

export default BlogPage