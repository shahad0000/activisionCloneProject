import React from "react";

const BlogCard = (props) => {
  return (
    <div>
      <div className="flex flex-col bg-black rounded-2xl overflow-hidden">
        <div>
          <img className="object-cover" src={props.img} alt="" />
        </div>
        <div className="flex flex-col gap-5 h-70  bg-[radial-gradient(90%_90%_at_top,_#333,_#000)] ">
          <div className="text-sm m-4">{props.date}</div>
          <div className="text-2xl mx-4">
           { props.title}
          </div>
          <div className="relative">
            <img
              className="object-cover z-[-1]"
              src="/imgs/divider.png"
              alt=""
            />
            <div className="absolute bottom-0 left-5">READ MORE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
