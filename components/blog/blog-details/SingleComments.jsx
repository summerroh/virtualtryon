import Image from "next/image";

const comments = [
  {
    name: "Al Hasani",
    avatar: "/images/blog/avatar_01.jpg",
    date: "13 June, 2022, 7:30pm",
    text: "One touch of a red-hot stove is usually all we need to avoid that kind of lorem discomfort in future. The same true we experience",
  },
  {
    name: "Rashed ka.",
    avatar: "/images/blog/avatar_02.jpg",
    date: "13 June, 2022, 7:30pm",
    text: "One touch of a red-hot stove is usually all we need to avoid that kind of lorem discomfort in future. The same true we experience",
  },
];

const SingleComments = () => {
  return (
    <>
      {comments.map((comment, index) => (
        <div className="comment d-flex" key={index}>
          <Image
            width={60}
            height={60}
            src={comment.avatar}
            alt="blog"
            className="user-avatar rounded-circle"
          />
          <div className="comment-text">
            <div className="name fw-500 tx-dark">{comment.name}</div>
            <div className="date">{comment.date}</div>
            <p>{comment.text}</p>
            <a href="#" className="reply-btn fw-500 tran3s">
              Reply
            </a>
          </div>
          {/* /.comment-text */}
        </div>
        /* /.comment */
      ))}
    </>
  );
};

export default SingleComments;
