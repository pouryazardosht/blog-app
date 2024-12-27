import { useEffect, useState } from "react";
import { useParams } from "react-router"

function BlogPage() {
    const { id } = useParams();
    // const [blog, setBlog] = useState()
    const state = useState()
    console.log(state);
    // useEffect()
    return (
        <div>BlogPage</div>
    )
}

export default BlogPage