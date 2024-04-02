import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import PropTypes from 'prop-types';


export default function CardCompenent({ textCard, description, children, ...props }) {
  return (
    <Card sx={{maxWidth: 300}} >
      <CardMedia
        component="img"
        // sx={style}}
        // image={path}
        // alt={textCard}
        {...props}
      />
      <CardContent>
        <Typography sx={{ fontFamily: "Alice" }} gutterBottom variant="h4" component={'h3'}>
          {textCard}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
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