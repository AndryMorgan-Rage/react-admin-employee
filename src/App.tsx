import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { EmployeeList } from "./employees/EmployeeList";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="employees" list={EmployeeList} />
  </Admin>
);

export default App;
