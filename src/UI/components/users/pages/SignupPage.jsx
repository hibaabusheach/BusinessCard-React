import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import Container from "@mui/material/Container";
import PageHeader from "../../../pages/PageHeader";
import useUsers from "../hooks/useUsers";
import useForm from "../../../../core/hooks/useForms";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import loginSchema from "../models/joi-schema/signupSchema";
import { useUser } from "../../users/providers/UserProvider";
import Form from "../../forms/Form";
import Input from "../../../components/forms/Input";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const SignupPage = () => {
    const { handleSignup } = useUsers();
    const { value, ...rest } = useForm(
        initialSignupForm,
        loginSchema,
        handleSignup
    )
    const { user } = useUser();
    if (user) return <Navigate replace to={ROUTES.CARDS} />;

    return (
        <>
            <Container>
                <PageHeader
                    title="Registration"
                    subtitle="Register Your Account."
                />                
                
                <Form
                    onSubmit={rest.onSubmit}
                    onChange={rest.validateForm}
                    onReset={rest.handleReset}
                    styles={{ maxWidth: "800px" }}
                    title="register"
                    to={ROUTES.CARDS}
                >
                    <Input
                        name="first"
                        label="first name"
                        error={value.errors.first}
                        handleChange={rest.handleChange}
                        data={value.data}
                        sm={6}
                    />
                    <Input
                        name="middle"
                        label="middle name"
                        error={value.errors.middle}
                        handleChange={rest.handleChange}
                        data={value.data}
                        sm={6}
                        required={false}
                    />
                    <Input
                        name="last"
                        label="last name"
                        error={value.errors.last}
                        handleChange={rest.handleChange}
                        data={value.data}
                        sm={6}
                    />
                    <Input
                        name="phone"
                        label="phone"
                        type="phone"
                        error={value.errors.phone}
                        handleChange={rest.handleChange}
                        data={value.data}
                        sm={6}
                    />
                    <Input
                        name="email"
                        label="email"
                        type="email"
                        error={value.errors.email}
                        handleChange={rest.handleChange}
                        data={value.data}
                        sm={6}
                    />
                    <Input
                        name="password"
                        label="password"
                        type="password"
                        error={value.errors.password}
                        handleChange={rest.handleChange}
                        data={value.data}
                        sm={6}
                    />
                    <Input
                        name="url"
                        label="image url"
                        error={value.errors.url}
                        handleChange={rest.handleChange}
                        data={value.data}
                        sm={6}
                        required={false}
                    />
                    <Input
                        name="alt"
                        label="image alt"
                        error={value.errors.alt}
                        handleChange={rest.handleChange}
                        data={value.data}
                        sm={6}
                        required={false}
                    />
                    <Input
                        name="state"
                        label="state"
                        error={value.errors.state}
                        handleChange={rest.handleChange}
                        data={value.data}
                        sm={6}
                        required={false}
                    />
                    <Input
                        label="country"
                        name="country"
                        error={value.errors.country}
                        handleChange={rest.handleChange}
                        data={value.data}
                        sm={6}
                    />
                    <Input
                        name="city"
                        label="city"
                        error={value.errors.city}
                        handleChange={rest.handleChange}
                        data={value.data}
                        sm={6}
                    />
                    <Input
                        name="street"
                        label="street"
                        error={value.errors.street}
                        handleChange={rest.handleChange}
                        data={value.data}
                        sm={6}
                    />
                    <Input
                        name="houseNumber"
                        label="house Number"
                        type="number"
                        error={value.errors.houseNumber}
                        handleChange={rest.handleChange}
                        data={value.data}
                        sm={6}
                    />
                    <Input
                        name="zip"
                        label="zip"
                        error={value.errors.zip}
                        handleChange={rest.handleChange}
                        data={value.data}
                        sm={6}
                        required={false}
                    />
                    <Grid item>
                        <FormControlLabel
                            onChange={(e) =>
                                rest.setData({ ...value.data, isBusiness: !!e.target.checked })
                            }
                            name="isBusiness"
                            control={
                                <Checkbox value={value.data.isBusiness} color="primary" />
                            }
                            label="Signup as business"
                        ></FormControlLabel>
                    </Grid>
                </Form>
            </Container>
        </>
    )
}

export default SignupPage;
