import { CardActions, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditModeIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUser } from "../../../users/providers/UserProvider";
import useCards from "../../../../../core/hooks/useCards";
import { useState } from "react";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { useTheme } from "../../../../providers/ThemeProvider";

const CardActionBar = ({ onDeleteCard, card, onLike }) => {
    const { handleLikeCard } = useCards();
    const { user } = useUser();
    const [isDialogOpen, setIsDialog] = useState(false);
    const navigate = useNavigate();

    const handleDialog = (term) => {
        if (term === "open") setIsDialog(true);
        else setIsDialog(false);
    };

    const handleDeleteCard = () => {
        handleDialog();
        onDeleteCard(card._id);
    };

    const handleLike = async () => {
        setLiked(prev => !prev);
        await handleLikeCard(card._id);
        await onLike();
    }

    const { isDark } = useTheme();
    const [isLiked, setLiked] = useState(() => !!user && !!card.likes.find(id => id === user._id));

    return (
        <>
            <CardActions
                disableSpacing
                sx={{ paddingTop: 0, justifyContent: "space-between", backgroundColor: isDark ? "#1A3628" : "#2683b6" }}
            >
                <Box>
                    { user && (user._id === card.user_id || user.isAdmin) && (
                        <IconButton onClick={() => handleDialog("open")}>
                            <DeleteIcon sx={{ color: "white" }} />
                        </IconButton>
                    )}
        
                    { user && user._id === card.user_id && (
                        <IconButton onClick={() => navigate(`${ROUTES.EDIT_CARD}/${card._id}`)}>
                            <EditModeIcon sx={{ color: "white" }} />
                        </IconButton>
                    )}
                </Box>

                <Box>
                    <IconButton>
                        <CallIcon sx={{ color: "white" }} />
                    </IconButton>

                    { user && (
                        <IconButton onClick={handleLike}>
                            <FavoriteIcon sx={{ color: isLiked ? '#ff1744' : 'white' }} />
                        </IconButton>
                    )}
                </Box>
            </CardActions>

            <CardDeleteDialog
                isDialogOpen={isDialogOpen}
                onDelete={handleDeleteCard}
                onChangeDialog={handleDialog}
            />
        </>
    )
}

export default CardActionBar