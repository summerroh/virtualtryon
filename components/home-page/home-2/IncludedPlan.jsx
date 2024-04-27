const cards = [
  {
    id: 1,
    icon: "/images/icon/icon_63.svg",
    title: "1-click installation",
    description:
      "Integrating your apps couldn't be any easier through Installatron.",
    delayAnim: "100",
  },
  {
    id: 2,
    icon: "/images/icon/icon_64.svg",
    title: "Domain name setup",
    description:
      "Linking your site to your domain name has never been easier with GoDaddy registered domain.",
    delayAnim: "200",
  },
  {
    id: 3,
    icon: "/images/icon/icon_65.svg",
    title: "24/7 network security",
    description: "Get peace of mind, knowing network dsu security and visitors",
    delayAnim: "300",
  },
  {
    id: 4,
    icon: "/images/icon/icon_66.svg",
    title: "Easy-to-use control panel",
    description:
      "Includes industry-standard cPanel to install apps, manage backups and security.",
    delayAnim: "100",
  },
  {
    id: 5,
    icon: "/images/icon/icon_67.svg",
    title: "Resources on-demand",
    description:
      "If you require more power for your site, seamlessly increase your CPU/RAM, I/O and storage with 1 click.",
    delayAnim: "200",
  },
  {
    id: 6,
    icon: "/images/icon/icon_68.svg",
    title: "Global Data Centers",
    description:
      "Get faster page loads & better customer experience with lorem.",
    delayAnim: "300",
  },
];

const IncludedPlan = () => {
  return (
    <>
      {cards.map((card) => (
        <div
          className="col-lg-4 col-sm-6 d-flex"
          key={card.id}
          data-aos="fade-up"
          data-aos-delay={card.delayAnim}
        >
          <div className="card-style-eleven text-center text-lg-start w-100 mt-110 lg-mt-50 xs-mt-40">
            <div className="icon d-flex align-items-center justify-content-center position-relative rounded-circle">
              <img src={card.icon} alt="illustration" className="lazy-img" />
            </div>
            <h4 className="mt-30 mb-20 lg-mb-10">{card.title}</h4>
            <p>{card.description}</p>
          </div>
          {/* /.card-style-eleven */}
        </div>
      ))}
    </>
  );
};

export default IncludedPlan;
