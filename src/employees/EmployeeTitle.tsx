import { useRecordContext } from 'react-admin'; // mi enregistrer ilay petit modification aveo alefa any am emplopyee edit 
export const EmployeeTitle = () => {
  const record = useRecordContext(); 
  if (!record) return null;
  return <span>Modifier : {record.firstname} {record.lastname}</span>;
};
