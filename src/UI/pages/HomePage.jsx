import { Container, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import CardComponent from '../components/cards/components/card/Card'
import PageHeader from '../pages/PageHeader'
import { useUser } from '../components/users/providers/UserProvider'
import useCards from '../../core/hooks/useCards'

const HomePage = () => {
    const { user } = useUser()
    const { value:{ cards }, handleGetCards } = useCards();

    useEffect(() => {
        handleGetCards();
    }, []);

    console.log(cards);
    return (
        <Container>
            <PageHeader title='Easy Way To Find Your Business Card' subtitle='Search and find your business card.' />
            <Stack spacing={1} gap={2} direction="row" my={2} flexWrap="wrap" justifyContent="center">
                { 
                    !user && (
                        cards?.slice(0, 3).map((card, i) => (<CardComponent card={card} key={i}></CardComponent>))
                )}
            </Stack>
        </Container>
    )
}

export default HomePage
