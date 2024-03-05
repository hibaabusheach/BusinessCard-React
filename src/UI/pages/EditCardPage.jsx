import useForm from "../../core/hooks/useForms";
import { useUser } from "../components/users/providers/UserProvider";
import initialCardForm from "../../core/helper/initialForms/initialCardForm";
import useCards from "../../core/hooks/useCards";
import cardSchema from "../../data/models/joi-schema/cardSchema";
import ROUTES from "../components/routes/routesModel";
import Container from "@mui/material/Container";
import CardForm from "../components/cards/components/CardForm";
import { useParams } from "react-router-dom";
import { normalizeCard } from "../../core/helper/normalization/normalizeCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mapCardToModel } from "../../core/helper/normalization/mapCardToModel";

const EditCardPage = () => {
    const [initialForm, setInitForm] = useState(initialCardForm);
    const navigate = useNavigate(); 
    const { id: cardID } = useParams();
    const { handleUpdateCard, handleGetCard, value: { card }, } = useCards();

    const { value, ...rest } = useForm(initialCardForm, cardSchema, () => {
        handleUpdateCard(cardID, {
            ...normalizeCard(value.data),
            bizNumber: card.bizNumber,
            user_id: card.user_id,
        });
    });

    const { user } = useUser();

    useEffect(() => {
        handleGetCard(cardID).then((data) => {
        if (user._id !== data.user_id) navigate(ROUTES.CARDS);
        const modeledCard = mapCardToModel(data);
        setInitForm(modeledCard);
        rest.setData(modeledCard);
        });
    }, [cardID]);

    return (
        <Container
            sx={{
                pt: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CardForm
                title="update card"
                data={value.data}
                onSubmit={rest.onSubmit}
                onReset={() => rest.setData(initialForm)}
                errors={value.errors}
                onFormChange={rest.validateForm}
                onInputChange={rest.handleChange}
            ></CardForm>
        </Container>
    )
}

export default EditCardPage