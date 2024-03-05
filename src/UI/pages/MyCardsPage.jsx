import { useUser } from "../components/users/providers/UserProvider";
import useCards from "../../core/hooks/useCards";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ROUTES from "../components/routes/routesModel";
import Container from '@mui/material/Container'
import Fab from '@mui/material/Fab'
import PageHeader from "../pages/PageHeader";
import CardsFeedback from "../components/cards/components/CardsFeedback";
import { useTheme } from "../providers/ThemeProvider";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

const MyCardsPage = () => {
    const { value:{ cards, isPending, error },  handleGetMyCards, handleDeleteCard } = useCards();
    const { user } = useUser();
    const navigate = useNavigate();
    const { isDark } = useTheme();

    useEffect(() => {
        if(!user) navigate(ROUTES.LOGIN);
        else handleGetMyCards();
    }, [user]);

    const onDeleteCard = async cardId => {
        // TODO: make this functionality more efficient.
        await handleDeleteCard(cardId);
        await handleGetMyCards();
    }

    console.log("cards:", cards);
    console.log("user:", user);

    return (
        <Container sx={{ position: "relative", minHeight: "92vh", paddingBottom: 5, marginBottom: 0 }}> 
            <PageHeader title='Build Your Card' subtitle='Here you can build your business card' />
            {" "}
            { cards && (
                <Fab   
                    aria-label=""
                    onClick={() => navigate(ROUTES.CREATE_CARD)}                                        // this 
                    sx={{position: "fixed", bottom: 75, right: 16, backgroundColor: isDark ? "#EDE0D4" : "#2683b6"}}
                >
                    <AddBusinessIcon />
                </Fab>   
            )}
            
            <CardsFeedback
                isPending={isPending}
                error={error}
                cards={cards}
                onDeleteCard={onDeleteCard}
            />
        </Container>
    )
}

export default MyCardsPage
