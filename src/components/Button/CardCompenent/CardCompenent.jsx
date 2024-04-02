import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import PropTypes from 'prop-types';


export default function CardCompenent({ textCard, description, children, ...props }) {
  return (
    <Card sx={{maxWidth: 300}}
    >
      <CardMedia
        component="img"
        // sx={style}}
        // image={path}
        // alt={textCard}
        {...props}
      />
      <CardContent className="bg-third-1000 text-white-1000">
        <Typography sx={{ fontFamily: "Alice" }} gutterBottom variant="h4" component={'h3'}>
          {textCard}
        </Typography>
        <Typography variant="body2" color="text-white-1000">
          {description}
        </Typography>
      </CardContent>
      <CardActions className="bg-third-1000 flex justify-center">
        {children}
      </CardActions>
    </Card>
  )
}

CardCompenent.propTypes = {
  textCard: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};