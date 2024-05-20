const leadItems = [
  { icon: "/images/icon/icon_94.svg", text: "Maintain Internet" },
  { icon: "/images/icon/icon_95.svg", text: "Accurate Information" },
  { icon: "/images/icon/icon_96.svg", text: "Quality Leads" },
];

const Leads = () => {
  return (
    <>
      {leadItems.map((item, index) => (
        <div className="col-md-4" key={index}>
          <div
            className="card-style-fourteen text-center mt-30"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="icon">
              <img
                src={item.icon}
                alt="icon shape"
                className="lazy-img m-auto"
              />
            </div>
            <p className="text-uppercase fs-18 mt-60 lg-mt-30">{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Leads;
