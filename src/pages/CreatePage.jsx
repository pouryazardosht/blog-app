import { useState } from "react"

function CreatePage() {
    const generateUniqueId = () => Math.floor(Math.random() * 1000000) + Date.now();

    const initialBlogState = {
        image: "/public/image.png",
        id: generateUniqueId(),
        title: "",
        author: "",
        content: "",
        updatedAt: new Date().toISOString(),
    };

    const [blog, setBlog] = useState(initialBlogState);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const blogHandler = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
    }

    const saveBlogToLocalStorage = () => {
        if (!blog.title || !blog.author || !blog.content) {
            setError("All fields are required.");
            setSuccess(""); // Clear success message if there's an error
            return;
        }

        try {
            const newBlog = { ...blog, id: generateUniqueId(), updatedAt: new Date().toISOString() };
            const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
            const updatedBlogs = [...existingBlogs, newBlog];
            localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
            setError(""); // Clear error message on successful save
            setSuccess("Blog created successfully!"); // Set success message
            setBlog(initialBlogState); // Reset blog state to initial values
        } catch (error) {
            console.log(error.message);
            setError("Error saving to localStorage.");
            setSuccess(""); // Clear success message if there's an error
        }
    };

    return (
        <div className="md:px-10">
            <h1 className="text-4xl font-bold ml-5 my-8">Create</h1>
            <div className="flex flex-col items-center gap-8">
                <div className="min-w-[400px] flex flex-col items-center bg-base-100 gap-6 rounded-xl shadow-xl p-5 border border-secondary border-dashed">
                    {error && <div className="text-red-500">{error}</div>}
                    {success && <div className="text-green-500">{success}</div>}
                    <div className="w-full flex flex-col items-start gap-2">
                        <label className="text-xl font-semibold">Title</label>
                        <input
                            name="title"
                            value={blog.title}
                            onChange={blogHandler}
                            type="text"
                            placeholder="Title..."
                            className="w-full p-2 border border-secondary border-dashed rounded-md"
                        />
                    </div>
                    <div className="w-full flex flex-col items-start gap-2">
                        <label className="text-xl font-semibold">Author</label>
                        <input
                            name="author"
                            value={blog.author}
                            onChange={blogHandler}
                            type="text"
                            placeholder="Author..."
                            className="w-full p-2 border border-secondary border-dashed rounded-md"
                        />
                    </div>
                    <div className="w-full flex flex-col items-start gap-2">
                        <label className="text-xl font-semibold">Content</label>
                        <textarea
                            name="content"
                            value={blog.content}
                            onChange={blogHandler}
                            placeholder="Content..."
                            className="w-full p-2 border border-secondary border-dashed rounded-md"
                        />
                    </div>
                    <button onClick={saveBlogToLocalStorage} className="btn btn-secondary">Save Blog</button>
                </div>
            </div>
        </div>
    );
}

export default CreatePage;