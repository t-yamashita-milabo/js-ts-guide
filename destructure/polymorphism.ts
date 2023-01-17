type User = {
  id: string;
  lastName: string;
  firstName: string;
};

type Student = User & {
  studentNo: number;
};

type Teacher = User & {
  subject: string;
};

const student: Student = {
  id: "001",
  lastName: "student",
  firstName: "alice",
  studentNo: 1,
};
const teacher: Teacher = {
  id: "101",
  lastName: "teacher",
  firstName: "bob",
  subject: "math",
};

{
  // ordinal parameters function
  const fmtFullName = (lastName: string, firstName: string) =>
    `${lastName} ${firstName}`;

  console.log(fmtFullName(student.lastName, student.firstName));
  console.log(fmtFullName(teacher.lastName, teacher.firstName));
}

{
  // polymorphic ver. function
  const fmtFullName = ({
    lastName,
    firstName,
  }: {
    lastName: string;
    firstName: string;
  }) => `${lastName} ${firstName}`;

  // Both `student` and `teacher` have `lastName` and `firstName`
  // so we can apply `fmtFullName()` to them directly.
  console.log(fmtFullName(student));
  console.log(fmtFullName(teacher));
}
