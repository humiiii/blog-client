import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blog_data, comments_data } from "../constants";
import { FaRegCircleUser } from "react-icons/fa6";
import { formatDistanceToNow } from "date-fns";

const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [dataComments, setDataComments] = useState([]);
  const [formattedDate, setFormattedDate] = useState(null);

  const fetchBlogData = async () => {
    const data = blog_data.find((item) => item._id === id);
    setData(data);
    const date = new Date(data.createdAt);
    const formatted = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setFormattedDate(formatted);
  };

  const fetchCommentsData = async () => {
    setDataComments(comments_data);
  };

  useEffect(() => {
    fetchBlogData();
    fetchCommentsData();
  }, []);

  return data ? (
    <div className="relative min-h-[60vh]">
      <>
        <div className="mx-auto mt-8 max-w-5xl rounded-xl p-6 text-center md:p-10">
          <div className="mb-8 flex flex-col items-center justify-center gap-2 text-xs text-gray-400 md:flex-row md:gap-4">
            <span>{formattedDate}</span>
            <span className="h-1 w-1 rounded-full bg-gray-300"></span>
            <span className="text-primary font-semibold tracking-wide uppercase">
              {data.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-gray-300"></span>
            <span>John Doe</span>
          </div>
          <h1 className="mb-6 text-3xl font-bold text-gray-800 md:text-5xl">
            {data.title}
          </h1>
          <h3 className="text-primary/70 mb-6 text-lg font-medium">
            {data.subTitle}
          </h3>
        </div>
      </>
      <>
        <div className="mx-5 my-10 mt-6 max-w-5xl">
          <img src={data.image} alt="" className="mb-5 rounded-lg" />
          <div
            className="prose prose-lg format-text mx-auto mt-8 text-left"
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></div>
        </div>
      </>
      <>
        <p className="mx-auto mb-6 max-w-3xl text-lg font-semibold text-gray-700">
          {dataComments.length} Comments
        </p>
        <div className="mx-auto mt-14 mb-10 max-h-96 max-w-3xl overflow-y-auto">
          <div className="flex flex-col gap-6">
            {dataComments.map((comment, index) => (
              <div
                className="flex items-center gap-4 rounded-lg bg-[#E4F1FF] p-4 shadow-sm transition-shadow hover:shadow-md"
                key={index}
              >
                <div className="flex min-w-[40px] flex-col items-center gap-2">
                  <FaRegCircleUser className="text-primary/70 h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-800">
                      {comment.name}
                    </p>
                    <span className="text-xs text-gray-400">
                      {comment.createdAt
                        ? formatDistanceToNow(new Date(comment.createdAt), {
                            addSuffix: true,
                          })
                        : ""}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {comment.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  ) : (
    <div
      role="status"
      className="flex min-h-[90vh] w-full items-center justify-center"
    >
      <svg
        aria-hidden="true"
        className="fill-primary h-8 w-8 animate-spin text-gray-200 dark:text-gray-300"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Blog;
