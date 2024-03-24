import generateRandomGradient from "../utils/generateRandomGradient";

function Post() {
  // console.log(gradient)
  return (
    <div>
      <div className="flex items-start gap-4 my-5 relative z-50 w-[90%]">
        <div
          className="w-8 h-8 border-[2px] border-gray-400 rounded-full"
          style={{ background: generateRandomGradient() }}
        ></div>

        <div className="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl shadow-md">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900">
              Anonymous
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:45 AM 23 March
            </span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900">
            {"That's"} awesome. I think our users will really appreciate the
            improvements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
