export default function createEmployeesObject(departmentName, employees) {
  const Objeto = {
    [`${departmentName}`]:
    employees,
  };
  return Objeto;
}
