const Team = () => {
  const teamMembers = [
    {
      imgSrc: "/images/team/img_01.jpg",
      name: "Rashe ka",
      role: "Marketing Head",
      delay: "100",
    },
    {
      imgSrc: "/images/team/img_02.jpg",
      name: "James Arthur",
      role: "Volunteer",
      delay: "200",
    },
    {
      imgSrc: "/images/team/img_03.jpg",
      name: "Jannat Kabir",
      role: "Volunteer Head",
      delay: "300",
    },
  ];

  return (
    <>
      {teamMembers.map((member, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={member.delay}
        >
          <div className="team-block-one mt-40">
            <div className="img-meta position-relative">
              <img
                src={member.imgSrc}
                alt={member.name}
                className="lazy-img w-100"
              />
              <div className="info position-absolute text-center">
                <h4 className="text-white mb-5">{member.name}</h4>
                <div className="text-white fs-18">{member.role}</div>
              </div>
              {/* /.info */}
            </div>
            {/* /.img-meta */}
          </div>
          {/* /.team-block-one */}
        </div>
      ))}
    </>
  );
};

export default Team;
