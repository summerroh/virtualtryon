const AddressInfo = () => {
  const addresses = [
    {
      icon: "/images/icon/icon_37.svg",
      title: "Our Address",
      address: "1012 Pebda Parkway, Mirpur 2\nDhaka, Bangladesh",
    },
    {
      icon: "/images/icon/icon_38.svg",
      title: "Contact Info",
      address: "Open a chat or give us call at\n310.841.5500",
    },
  ];

  return (
    <>
      {addresses.map((address, i) => (
        <div className="col-md-6 d-flex" key={i}>
          <div className="address-block-one">
            <div className="icon position-absolute">
              <img src={address.icon} alt="icon" className="lazy-img" />
            </div>
            <div className="text-meta">
              <h4 className="title">{address.title}</h4>
              <p className="fs-18">{address.address}</p>
            </div>
            {/* /.text-meta */}
          </div>
        </div>
      ))}
    </>
  );
};

export default AddressInfo;
