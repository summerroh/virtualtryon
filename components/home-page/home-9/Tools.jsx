const Tools = () => {
  const toolNames = [
    "Adobe Photoshop",
    "Adobe XD",
    "Sketch App",
    "Adobe Premier",
    "Illustrator",
    "WordPress Dev",
    "Figma",
  ];

  return (
    <ul className="style-none tx-dark fs-20 tools-list">
      {toolNames.map((toolName) => (
        <li key={toolName}>{toolName}</li>
      ))}
    </ul>
  );
};

export default Tools;
