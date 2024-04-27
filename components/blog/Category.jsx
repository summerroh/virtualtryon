const Category = () => {
  const categories = [
    { name: "Digital", count: 3 },
    { name: "Marketing", count: 4 },
    { name: "Design", count: 2 },
    { name: "WordPress", count: 8 },
    { name: "Plugin", count: 5 },
  ];

  return (
    <ul className="style-none">
      {categories.map((category, index) => (
        <li key={index}>
          <a href="#">
            {category.name}
            <span className="float-end">({category.count})</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Category;
