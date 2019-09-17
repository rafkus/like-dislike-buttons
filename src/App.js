
import React, { Component } from 'react'
import cx from 'classnames';

class App extends Component {

  state = {
    isLikePressed: false,
    likeCounter: 100,

    isDislikePressed: false,
    dislikeCounter: 25
  };

  onLikeButtonClick = () => {
    if(this.isDislikePressed()) {
      this.decrementDislike();
      this.toggleDislike();
    }

    if(this.isLikePressed()) {
      this.decrementLike();
    } else {
      this.incrementLike();
    }
    this.toggleLike();
  }

  isLikePressed = () => {
    return this.state.isLikePressed;
  }

  decrementLike = () => {
    this.setState((prevState, props) => {
      return {
        likeCounter: prevState.likeCounter - 1
      }
    });
  }

  incrementLike = () => {
    this.setState((prevState, props) => {
      return {
        likeCounter: prevState.likeCounter + 1
      }
    });
  }

  toggleLike = () => {
    this.setState((prevState, props) => {
      return {
        isLikePressed: !prevState.isLikePressed
      }
    });
  }

  onDislikeButtonClick = () => {
    if(this.isLikePressed()) {
      this.decrementLike();
      this.toggleLike();
    }

    if(this.isDislikePressed()) {
      this.decrementDislike();
    } else {
      this.incrementDislike();
    }
    this.toggleDislike();
  }

  isDislikePressed = () => {
    return this.state.isDislikePressed;
  }

  decrementDislike = () => {
    this.setState((prevState, props) => {
      return {
        dislikeCounter: prevState.dislikeCounter - 1
      }
    });
  }

  incrementDislike = () => {
    this.setState((prevState, props) => {
      return {
        dislikeCounter: prevState.dislikeCounter + 1
      }
    });
  }

  toggleDislike = () => {
    this.setState((prevState, props) => {
      return {
        isDislikePressed: !prevState.isDislikePressed
      }
    });
  }

  render() {
    return (
      <React.Fragment>
          <div>
              <h2>Like/Dislike</h2>
              <LikeButton 
              name="Like" 
              isPressed={this.state.isLikePressed}
              counter={this.state.likeCounter} 
              clicked={this.onLikeButtonClick}/>

              <DislikeButton 
              name="Dislike" 
              isPressed={this.state.isDislikePressed}
              counter={this.state.dislikeCounter} 
              clicked={this.onDislikeButtonClick}/>
          </div>
          <style>{`
              .like-button, .dislike-button {
                  font-size: 1rem;
                  padding: 5px 10px;
                  color:   #585858;
              }

              .liked, .disliked {
                  font-weight: bold;
                  color: #1565c0;
              }
          `}
          </style>
      </React.Fragment>
    )
  }
}

const LikeButton = (props) => {
  let classes = cx({
    'like-button': true,
    'liked': props.isPressed,
  });

  return(
    <button 
    className={classes}
    onClick={props.clicked}>
      {props.name} | <span className="likes-counter">{props.counter}</span>
    </button>
  )
}

const DislikeButton = (props) => {
  let classes = cx({
    'dislike-button': true,
    'disliked': props.isPressed,
  });

  return(
    <button 
    className={classes}
    onClick={props.clicked}>
      {props.name} | <span className="dislikes-counter">{props.counter}</span>
    </button>
  )
}


export default App;
