"use client";
const CommentBox = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent form submission
    // Handle form submission logic here
  };

  return (
    <form action="#" className="mt-30" onSubmit={handleSubmit}>
      <div className="input-wrapper mb-35">
        <label>Name*</label>
        <input type="text" placeholder="Rashed Kabir" required />
      </div>
      {/* /.input-wrapper */}
      <div className="input-wrapper mb-40">
        <label>Email*</label>
        <input type="email" placeholder="rshdkabir@gmail.com" required />
      </div>
      {/* /.input-wrapper */}
      <div className="input-wrapper mb-30">
        <textarea placeholder="Your Comment" defaultValue={""} />
      </div>
      {/* /.input-wrapper */}
      <button className="btn-twentyTwo fw-500 tran3s">Post Comment</button>
    </form>
  );
};

export default CommentBox;
