import PropTypes from "prop-types";
import { CgProfile } from "react-icons/cg";

import { SlCalender } from "react-icons/sl";
import { Link } from "react-router";
function Card({ data }) {

    const { id, thumbnail, title, content, updatedAt, slug } = data
    return (
        <Link to={`/blogs/${id}`} className="blog-card mx-10 py-3 md:py-0 border border-secondary border-dashed  ">
            <img src={thumbnail} alt={title} />
            <div className="flex flex-col items-center md:items-start gap-6 px-6">
                <p className="text-[18px] md:text-xl font-semibold ">{title}</p>
                <p className="text-[15px] text-zinc-700 md:text-[16px] text-ellipsis overflow-hidden h-auto card-content">{content}</p>
                <div className="flex flex-col w-full items-start md:flex-row md:items-center gap-4">
                    <p className="badge gap-1 py-2">
                        <span>
                            <CgProfile />
                        </span>
                        {slug}
                    </p>
                    <p className="badge gap-1 py-2">
                        <span>
                            <SlCalender />
                        </span>
                        {updatedAt}
                    </p>
                </div>
            </div>
        </Link>
    )
}


Card.propTypes = {
    data: PropTypes.object
}

export default Card