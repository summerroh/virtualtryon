import Image from "next/image";

const teamData = [
  {
    id: 1,
    name: "Rashed Kabir",
    position: "UI Designer",
    imgSrc: "/images/team/img_08.jpg",
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-pinterest-p", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
  {
    id: 2,
    name: "Jannat Ferdaus",
    position: "Marketing Lead",
    imgSrc: "/images/team/img_09.jpg",
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-pinterest-p", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
  {
    id: 3,
    name: "Jubayer Hasan",
    position: "Developer",
    imgSrc: "/images/team/img_10.jpg",
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-pinterest-p", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
  {
    id: 4,
    name: "Jubayer Hasan",
    position: "Developer",
    imgSrc: "/images/team/img_11.jpg",
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-pinterest-p", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
];

const Team4 = () => {
  return (
    <>
      {teamData.map((teamMember, index) => (
        <div
          className="col-md-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={100 * (index + 1)}
          key={index}
        >
          <div className="team-block-three position-relative mt-40 ">
            <Image
              width={341}
              height={486}
              src={teamMember.imgSrc}
              alt={teamMember.name}
              className="team-img w-100"
            />
            <div className="overlay-bg d-flex align-items-end">
              <div className="hover-content tran3s">
                <h6 className="name text-white">{teamMember.name}</h6>
                <div className="position">{teamMember.position}</div>
                <ul className="social-icon d-flex style-none">
                  {teamMember.socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.url}>
                        <i className={link.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* /.overlay-bg */}
          </div>
          {/* /.team-block-three */}
        </div>
        /* col-lg-3 */
      ))}
    </>
  );
};

export default Team4;
