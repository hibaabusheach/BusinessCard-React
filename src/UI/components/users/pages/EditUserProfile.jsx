import { useEffect, useState } from "react";
import { Container } from "@mui/material";

import useForm from "../../../../core/hooks/useForms";
import initialEditForm from "../helpers/initialForms/initialSignupForm";
import useUsers from "../hooks/useUsers";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { mapUserToModel } from "../helpers/normalization/mapUserToModel";
import { useUser } from "../providers/UserProvider";
import { getUserId } from "../services/usersApiService";
import UserForm from "./UserForm";
import editUserSchema from "../models/joi-schema/editUserSchema";

const EditUserProfile = () => {
  const [initialForm, setInitForm] = useState(initialEditForm);
  const { user } = useUser();
  const { handleEditUser } = useUsers();
  const { value, ...rest } = useForm(initialEditForm, editUserSchema, () => {
    handleEditUser(
      {
        ...normalizeUser(value.data),
      },
      user._id
    );
  });

  useEffect(() => {
    if (user && user._id) {
      getUserId(user._id).then((data) => {
        const modeledUser = mapUserToModel(data);
        setInitForm(modeledUser);
        rest.setData(modeledUser);
      });
    }
  }, [user]);

  return (
    <Container
      sx={{
        pt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm
        title="edit user"
        data={value.data}
        onSubmit={rest.onSubmit}
        onReset={() => rest.setData(initialForm)}
        errors={value.errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
      ></UserForm>
    </Container>
  );
};

export default EditUserProfile;
