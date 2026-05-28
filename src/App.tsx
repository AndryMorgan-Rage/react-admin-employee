import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeEdit } from "./employees/EmployeeEdit";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="employees" list={EmployeeList} edit={EmployeeEdit} />
  </Admin>
);

export default App;
