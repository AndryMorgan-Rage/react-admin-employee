import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeEdit } from "./employees/EmployeeEdit";
import { EmployeeCreate } from "./employees/EmployeeCreate";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="employees" list={EmployeeList} edit={EmployeeEdit} create={EmployeeCreate} />
  </Admin>
);

export default App;
