import Container from '@mui/material/Container'
import PageHeader from '../pages/PageHeader'
import { useEffect } from 'react'
import CardsFeedback from '../components/cards/components/CardsFeedback'
import useCards from '../../core/hooks/useCards'
import { useUser } from '../components/users/providers/UserProvider'
import { Navigate } from 'react-router-dom'
import ROUTES from '../components/routes/routesModel'

const CardsPage = () => {
    const { user } = useUser();
    const { value:{ cards, error, isPending, filteredCards }, handleGetCards, handleDeleteCard, handleGetMyCards } = useCards();

    useEffect(() => {
        handleGetCards();
    }, []);

    const onDeleteCard = async cardId => {
        // TODO: make this functionality more efficient.
        await handleDeleteCard(cardId);
        await handleGetMyCards();
    }

    useEffect(() => {
        console.log('filtered Cards:',filteredCards);
    }, [filteredCards]);
    
    // checks if the user is not exists
    if (!user) return <Navigate to={ROUTES.CARDS} />;
    
    if (user && !user.isBusiness) return (
        <Container>
            <PageHeader title='Welcome User' subtitle='Here you can find business cards from all categories' />
            <CardsFeedback
                isPending={isPending}
                error={error}
                cards={filteredCards}
                onDeleteCard={onDeleteCard}
            />
        </Container>
    )

    if (user.isAdmin && user.isBusiness) return (
        <Container>
            <PageHeader title='Welcome Admin' subtitle='Here you can find business cards from all categories' />
            <CardsFeedback
                isPending={isPending}
                error={error}
                cards={filteredCards}
                onDeleteCard={onDeleteCard}
            />
        </Container>
    )

    if (user && user.isBusiness) return (
        <Container>
            <PageHeader title='Welcome Business User' subtitle='Here you can find business cards from all categories' />
            <CardsFeedback
                isPending={isPending}
                error={error}
                cards={filteredCards}
                onDeleteCard={onDeleteCard}
            />
        </Container>
    )
}

export default CardsPage