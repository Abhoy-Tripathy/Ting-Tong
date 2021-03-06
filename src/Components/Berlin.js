import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import chefs from "./data.json";
import BerlinMenu from "./BerlinMenu";
import { CenterFocusStrong } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 650,
  
    textAlign: "center",
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:0,
   
  },
  media: {
    height: 0,
    width: "60%",
    paddingTop: "50%", // 16:9
    marginLeft: "auto",
    marginRight: "auto",
 
  },


  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    marginRight: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Berlin() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const result = chefs.find(chef=>chef.location==='Berlin');

  return (
    <div className="card-container">
      <div className="card">
        
        <Card className={classes.root}>
          <CardHeader
            avatar={<Avatar aria-label="" className={classes.avatar}></Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
          />
          <div className="cardHeader">
            <h3>{result.name}</h3>
          </div>
          <div className="cardHeader">
            <h3>{result.location}</h3>
          </div>

          <CardMedia className={classes.media} image={result.img.src} />
          <CardContent>
            <Typography variant="h6" color="textSecondary" component="h6">
              {result.bio}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            See Menu Here !
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Dishes:</Typography>
              <Typography paragraph>
                
                  <ul>
                    <li>
                      <BerlinMenu />
                    </li>
                  </ul>
                
              </Typography>
              <Typography paragraph></Typography>
              <Typography paragraph></Typography>
              <Typography></Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
}
