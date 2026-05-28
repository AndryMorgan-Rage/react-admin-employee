import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  SelectInput,
  required,
  minValue,
  email,
} from 'react-admin';
import { EmployeeTitle } from './EmployeeTitle';

export const EmployeeEdit = () => (
  <Edit title={<EmployeeTitle />}>
    <SimpleForm>
      <TextInput source="firstname" label="Prénom" validate={required()} />
      <TextInput source="lastname" label="Nom" validate={required()} />
      <TextInput
        source="email"
        label="Email"
        validate={[required(), email()]}
      />
      <SelectInput
        source="department"
        label="Département"
        validate={required()}
        choices={[
          { id: 'Informatique', name: 'Informatique' },
          { id: 'Marketing', name: 'Marketing' },
          { id: 'RH', name: 'RH' },
          { id: 'Finance', name: 'Finance' },
        ]}
      />
      <NumberInput
        source="salary"
        label="Salaire"
        validate={[required(), minValue(1500, 'Minimum 1500')]}
      />
      <BooleanInput source="active" label="Actif" />
    </SimpleForm>
  </Edit>
);
