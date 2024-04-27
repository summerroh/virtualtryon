"use client";
const HeroSubscribe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="#"
      className="position-relative bg-white"
    >
      <label className="position-absolute fs-15">Email address</label>
      <input
        type="email"
        placeholder="demomail@jano.gov"
        className="fs-17 position-absolute w-100 tx-dark fw-500"
      />
      <button className="tran3s position-absolute">SUBSCRIBE</button>
    </form>
  );
};

export default HeroSubscribe;
