import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import PhoneIcon from "@mui/icons-material/Phone";
import CreateIcon from "@mui/icons-material/Create";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Card = () => {
  return (
    <MuiCard sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 140, margin: 1 }}
        image="https://cdn.pixabay.com/photo/2023/04/06/01/26/heart-7902540_960_720.jpg"
        title="green lawn"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Business Card
        </Typography>
        {/* <CardHeader title="Business Card" /> */}
        <Typography gutterBottom variant="subtitle2" component="div">
          Business Card
        </Typography>
        <Divider />
        <Typography component="div">
          <Typography variant="body2" fontWeight={500} component="span">
            Phone:
            <Typography variant="body2" component="span" color="#616161">
              050-0000000
            </Typography>
          </Typography>
        </Typography>
        <Typography component="div">
          <Typography variant="body2" fontWeight={500} component="span">
            Address:
            <Typography variant="body2" component="span" color="#616161">
              Shinkin 3 tel-aviv
            </Typography>
          </Typography>
        </Typography>
        <Typography component="div">
          <Typography variant="body2" fontWeight={500} component="span">
            Card Number:
            <Typography variant="body2" component="span" color="#616161">
              4000000
            </Typography>
          </Typography>
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Create">
            <CreateIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton aria-label="Phone">
            <PhoneIcon />
          </IconButton>
          <IconButton aria-label="Favorite">
            <FavoriteIcon />
          </IconButton>
        </Box>
      </Box>
    </MuiCard>
  );
};

export default Card;
