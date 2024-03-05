import { useCallback, useEffect } from "react";
import useCards from "../../core/hooks/useCards";
import Container from '@mui/material/Container'
import PageHeader from '../pages/PageHeader'
import CardsFeedback from '../components/cards/components/CardsFeedback'

const FavCardsPage = () => {
    const { value, ...rest } = useCards();
    const {cards, isPending, error} = value;
    const { handleDeleteCard, handleGetFavCards } = rest;

    useEffect(() => {
        handleGetFavCards();
    }, []);

    const onDeleteCard = useCallback( async (cardId) => {
        await handleDeleteCard(cardId);
        await handleGetFavCards();
    }, []);

    const changeLikeStatus = useCallback( async () => {
        await handleGetFavCards();
    })

    return (
        <Container >
            <PageHeader title='Your Favorite Cards' subtitle='Here you can find all your favorite cards' />
            <CardsFeedback
                isPending={isPending}
                error={error}
                cards={cards}
                onDeleteCard={onDeleteCard}
                onLike={changeLikeStatus}
            />
        </Container>
    )
}

export default FavCardsPage
