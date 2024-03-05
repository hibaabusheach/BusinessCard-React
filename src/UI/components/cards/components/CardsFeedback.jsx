import Error from "../../../pages/Error";
import Spinner from "../../../pages/Spinner";
import { Container, Grid, Typography } from "@mui/material";
import Cards from "./Cards";
import { arrayOf, bool, func, string } from "prop-types";
import cardType from "../../../../data/models/types/cardType";
import { useTheme } from "../../../providers/ThemeProvider";

const CardsFeedback = ({ isPending, error, cards, onDeleteCard, onLike }) => {
  const { isDark } = useTheme();

  if (isPending) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && !cards.length)
    return (
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Typography
            variant="h5"
            color="initial"
            sx={{
              marginTop: "20px",
              color: isDark ? "white" : "black",
            }}
          >
            It seems there are no business cards to display
          </Typography>
          <Grid item xs={12} md={12} justifyContent="center">
            <img
              src="/assets/images/oops2.png"
              alt="broken robot"
              width="100%"
            />
          </Grid>
        </Grid>
      </Container>
    );
  if (cards && !!cards.length)
    return <Cards cards={cards} onDeleteCard={onDeleteCard} onLike={onLike} />;
};

CardsFeedback.propTypes = {
  isPending: bool.isRequired,
  error: string,
  cards: arrayOf(cardType),
  onLike: func.isRequired,
};

CardsFeedback.defaultProps = {
  onLike: async () => {},
};

export default CardsFeedback;
