const Skills = () => {
  const skills = [
    { name: "Great Interface", bgColor: "#FFF8F8" },
    { name: "Experienced", bgColor: "#E4FCF9" },
    { name: "Low Price", bgColor: "#E5F4FB" },
    { name: "Customizable", bgColor: "#FFF9E6" },
    { name: "Marketing", bgColor: "#F9EDFF" },
    { name: "Great Support", bgColor: "#F0F9E0" },
    { name: "Safe", bgColor: "#FFF0F0" },
    // Add more skills here as needed
  ];

  return (
    <ul className="d-flex flex-wrap align-items-center style-none skils-list">
      {skills.map((skill, index) => (
        <li key={index}>
          <span style={{ backgroundColor: skill.bgColor }}>{skill.name}</span>
        </li>
      ))}
      <li>&amp; more…</li>
    </ul>
  );
};

export default Skills;
