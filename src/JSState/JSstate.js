import React, { Component } from 'react'
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

export default class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number: 0
        }
    }

    plusCount=() => {
        this.setState({
            number:this.state.number+1
        })
    }

    minCount=() => {
        if (this.state.number <= 0) {
            alert("cant add number if 0")
        } else {
            this.setState({
                number:this.state.number-1
            })
        }
    }

    reset=() => {
        this.setState({
            number:this.state.number=0
        })
    }

    render() {
        let {number} = this.state
        return (
            <div>
                <Card className={useStyles.card}>
      <CardContent>
        <Typography className={useStyles.title} color="textSecondary" gutterBottom>
          Project Counter With State
        </Typography>
        <Typography variant="h4">
         {number}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
        size="small"
        onClick={this.plusCount}
        >+</Button>

        <Button 
        size="small"
        onClick={this.minCount}
        >-</Button>

        <Button 
        size="small"
        onClick={this.reset}
        >Reset</Button>
      </CardActions>
    </Card>
            </div>
        )
    }
}
