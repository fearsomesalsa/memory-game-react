import React from 'react';
import './Card.css';

class Card extends React.Component {

  // Поднимем стейт на уровень выше
//   constructor() {
//     super();
//     this.state = { isOpened: false };
//   }

  cardClickHandler(item) {
    // this.setState({isOpened: !this.state.isOpened}); // eуже не нужно, т.к. isOpened будет получать из props, isOpened переименовали на isShown
    this.props.onChoice(item);
  }

  render() {
    return (
    <div className={'card ' + (this.props.isShown ? 'opened' : 'closed')} onClick={this.cardClickHandler.bind(this, this.props.item)}>
        <div className="card-inner card-front">
            <img src={'/images/' + this.props.item.image} alt={this.props.item.name}/>
        </div>
        <div className="card-inner card-back">
            <img src={'/images/question.svg'} alt="question mark"/>
        </div>
    </div>);
  }
}

export default Card;