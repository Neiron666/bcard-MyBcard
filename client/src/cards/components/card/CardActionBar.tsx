import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import CardInterface from "../../interfaces/CardInterface";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

type Props = {
  onDelete: (id: string) => void;
  onLike: (id: string) => void;

  onCall: (id: string) => void;
  cardId: string;
};

const CardActionBar: React.FC<Props> = ({
  onDelete,
  onLike,
  onCall,
  cardId,
}) => {
  const navigate = useNavigate();
  return (
    <Box display="flex" justifyContent="space-between">
      <Box>
        <IconButton aria-label="delete" onClick={() => onDelete(cardId)}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="edit card"
          onClick={() => navigate(`${ROUTES.EDIT_CARD}/${cardId}`)}
        >
          <CreateIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton aria-label="Phone" onClick={() => onCall(cardId)}>
          <PhoneIcon />
        </IconButton>
        <IconButton aria-label="Favorite" onClick={() => onLike(cardId)}>
          <FavoriteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CardActionBar;
