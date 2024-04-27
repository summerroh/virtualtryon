const Partners = () => {
  const partners = [
    { name: "Google", className: "br-name" },
    { name: ".", className: "br-name" },
    { name: "Facebook", className: "br-name font-recoleta" },
    { name: ".", className: "br-name" },
    { name: "Insta", className: "br-name" },
    { name: ".", className: "br-name" },
    { name: "Fundbox", className: "br-name" },
  ];

  return (
    <>
      {partners.map((partner, index) => (
        <div key={index} className={partner.className}>
          {partner.name}
        </div>
      ))}
    </>
  );
};

export default Partners;
