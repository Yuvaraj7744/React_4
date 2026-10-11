import StudentCard from "./StudentCard.jsx";
const StudentList = () => {
  const StudentsData = [
    { id: 1, title: "About Space", children: "React" },
    { id: 2, title: "The Monster", children: "React" },
    { id: 3, title: "Nothing", children: "React" },
  ];

  return (
    <div>
      {StudentsData.map((data) => (
        <StudentCard
          title={data.title}
          children={data.children}
        />
      ))}
    </div>
  );
};

export default StudentList;
