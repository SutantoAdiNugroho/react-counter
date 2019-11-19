import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    }
  });

export default function JSHooks() {
    const classes = useStyles();
    const [count, setCount] = React.useState({number : 0})

    const plusCount = () => {
        setCount({
          number:count.number+1
        })
    }
  
    const minCount = () => {
      if (count.number <= 0) {
        alert("cant add number if 0")
      } else {
          setCount({
          number:count.number-1
        })
      }
    }
  
    const reset = () => {
      setCount({
        number:count.number=0
      })
    }

    let {number} = count
  
    return (
        <div>
            <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Project Counter With Hooks
        </Typography>
        <Typography variant="h4">
         {number}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
        size="small"
        onClick={plusCount}
        >+</Button>

        <Button 
        size="small"
        onClick={minCount}
        >-</Button>

        <Button 
        size="small"
        onClick={reset}
        >Reset</Button>
      </CardActions>
    </Card>
        </div>
    )
}
