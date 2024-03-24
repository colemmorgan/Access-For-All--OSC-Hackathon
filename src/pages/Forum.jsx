import Post from "../components/Post";
import postFormComment from "../utils/post";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useEffect, useState } from "react";

function Forum() {
  const [formData, setFormData] = useState("");
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const response = await axios.get("http://localhost:8000/api/posts");
    setPosts(response.data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  const handleChange = (event) => {
    // Update formData state on every input change
    setFormData(event.target.value);
  };

  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Log the form data when the form is submitted
    console.log("Form Data is:");
    console.log(formData);

    try {
      // const response = await postFormComment(`${BASE_URL}/api/makepost`, data);
      const response = await axios.post(
        "http://localhost:8000/api/createpost",
        {
          content: formData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);

      getPosts()
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white">
      <div className="w-full mx-auto my-0 max-w-[55%]">
        <div>
          <div className="mt-20">
            <div className="">
              <h2 className="text-4xl font-bold text-black">
                <span className="relative z-50 px-4 py-1 text-white bg-purple-500 rounded-lg">
                  Forum
                </span>
              </h2>
            </div>
            <p className="my-4 text-lg text-black">
              Start developing with an open-source library of over 450+ UI
              components, sections, and pages built with the utility classes
              from Tailwind CSS and designed in Figma.
            </p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <form className="relative z-50 w-full" onSubmit={handleSubmit}>
              <div className="mb-4 border border-gray-200 rounded-lg shadow-md bg-gray-50">
                <div className="relative w-auto px-4 py-2 bg-white rounded-t-lg">
                  <label className="sr-only">Your comment</label>
                  <textarea
                    id="comment"
                    rows="4"
                    className="w-full text-left text-gray-900 placeholder-left bg-white border-0 outline-none placeholder:-translate-y-6 focus:ring-0 dark:placeholder-gray-400"
                    placeholder="Write a comment..."
                    value={formData}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t">
                  <button
                    type="submit"
                    className="inline-flex font-bold items-center py-2.5 px-4 text-xs text-center text-white bg-purple-600 rounded-lg border-2 border-white hover:text-purple-600 hover:border-purple-600 hover:border-2 hover:bg-white transition duration-300"
                  >
                    Post comment
                  </button>
                  <div className="flex space-x-1 ps-0 rtl:space-x-reverse sm:ps-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 12 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                        />
                      </svg>
                      <span className="sr-only">Attach file</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                      </svg>
                      <span className="sr-only">Set location</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                      </svg>
                      <span className="sr-only">Upload image</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Chat section */}

          <br />

          {posts.toReversed().map((post) => (
            <Post
              key={post.id}
              text={post.post_content}
              time={post.timestamp}
            />
          ))}
        </div>
      </div>
      {/* SVG for background */}

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 800 450"
          opacity="0.6"
          className="fixed top-0 bottom-0 left-0 right-0 -z-1"
          preserveAspectRatio="none"
        >
          <defs>
            <filter
              id="bbblurry-filter"
              x="-100%"
              y="-100%"
              width="400%"
              height="400%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur
                stdDeviation="69"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="SourceGraphic"
                edgeMode="none"
                result="blur"
              ></feGaussianBlur>
            </filter>
          </defs>
          <g filter="url(#bbblurry-filter)">
            <ellipse
              rx="263"
              ry="261.5"
              cx="110.4917125985059"
              cy="-129.7923660017812"
              fill="hsla(290, 87%, 47%, 1.00)"
              data-darkreader-inline-fill=""
            ></ellipse>
            <ellipse
              rx="263"
              ry="261.5"
              cx="855.965330587147"
              cy="569.757694379168"
              fill="hsla(272, 99%, 54%, 1.00)"
              data-darkreader-inline-fill=""
            ></ellipse>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Forum;
