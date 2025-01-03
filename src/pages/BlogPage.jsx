import { useEffect, useState } from "react";
import { useParams } from "react-router"
import api from '../services/config'
import { ClipLoader } from "react-spinners";
import { CgProfile } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
function BlogPage() {
    const { id } = useParams();
    const [blog, setBlog] = useState();
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
                    <section className="flex justify-center px-4">
                        <div className="flex flex-col md:flex-row items-center md:items-start bg-base-100 gap-6 rounded-xl shadow-xl max-w-[900px] border border-secondary p-5" >
                            <img className="w-[300px] rounded-xl" src={blog.thumbnail} alt={blog.title} />
                            <div className="flex flex-col items-start gap-5">
                                <h1 className="text-[18px] md:text-xl font-semibold ">{blog.title}</h1>
                                <div className="flex flex-col w-full items-start md:flex-row md:items-center gap-4">
                                    <p className="badge badge-md gap-1 py-2">
                                        <span>
                                            <CgProfile />
                                        </span>
                                        {blog.slug}
                                    </p>
                                    <p className="badge badge-md gap-1 py-2">
                                        <span>
                                            <SlCalender />
                                        </span>
                                        {blog.updatedAt}
                                    </p>
                                </div>
                                <div className="px-6">
                                    <p className="text-justify text-[16px] md:text-[19px]">
                                        {blog.content}
                                    </p>
                                </div>
                            </div>
                        </div >
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