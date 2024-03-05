import { func, object, string } from "prop-types";

import Form from "../../forms/Form";
import Input from "../../forms/Input";
import ROUTES from "../../routes/routesModel";

const UserForm = ({
  onSubmit,
  onReset,
  errors,
  data,
  onFormChange,
  onInputChange,
  title,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      onChange={onFormChange}
      title={title}
      styles={{ maxWidth: "800px" }}
      to={ROUTES.CARDS}
    >
      <Input
        name="first"
        label="first name"
        error={errors.first}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="middle"
        label="middle name"
        error={errors.middle}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="last"
        label="last name"
        error={errors.last}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="phone"
        label="phone"
        type="phone"
        error={errors.phone}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="url"
        label="image url"
        error={errors.url}
        handleChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Input
        name="alt"
        label="image alt"
        error={errors.alt}
        handleChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Input
        name="state"
        label="state"
        error={errors.state}
        handleChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Input
        name="country"
        label="country"
        error={errors.country}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="city"
        label="city"
        error={errors.city}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="street"
        label="street"
        error={errors.street}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="houseNumber"
        label="houseNumber"
        type="number"
        error={errors.houseNumber}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="zip"
        label="zip"
        type="number"
        error={errors.zip}
        handleChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
    </Form>
  );
};

UserForm.propTypes = {
  onSubmit: func.isRequired,
  onReset: func.isRequired,
  errors: object.isRequired,
  onFormChange: func.isRequired,
  data: object.isRequired,
  onInputChange: func.isRequired,
  title: string.isRequired,
};

export default UserForm;
