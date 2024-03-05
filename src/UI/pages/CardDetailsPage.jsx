import { useParams } from "react-router-dom";
import Container from '@mui/material/Container'
import useCards from "../../core/hooks/useCards";
import { useEffect } from "react";
import { Box, CardContent } from "@mui/material";
import CardDetails from "./CardDetails";

const CardDetailsPage = () => {
    const { id } = useParams();
    const { value: {card}, handleGetCard } = useCards();

    useEffect(() => {
        handleGetCard(id);
    }, [id]);

    return (
        <Container maxWidth="lg">
            <CardContent>   
                <Box mt={1}>
                    <CardDetails card={card}/>
                </Box>
            </CardContent>
        </Container>
    )
}

export default CardDetailsPage;