import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  SelectInput,
} from 'react-admin';

export const EmployeeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="email" />
      <SelectInput
        source="department"
        choices={[
          { id: 'Informatique', name: 'Informatique' },
          { id: 'Marketing', name: 'Marketing' },
          { id: 'RH', name: 'RH' },
          { id: 'Finance', name: 'Finance' },
        ]}
      />
      <NumberInput source="salary" />
      <BooleanInput source="active" />
    </SimpleForm>
  </Edit>
);
