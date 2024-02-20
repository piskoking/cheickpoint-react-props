import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl
}) => (
  <Card style={
    {
      width: '18rem'
    }
  }>
    <Card.Img variant="top" src={imageUrl  } />
    <Card.Body>
      <Card.Title>{name }</Card.Title>
      <Card.Text>
        Équipe : {team}
        Nationalité : {nationality}
        Numéro de maillot : {jerseyNumbez}
        Âge : {age}
      </Card.Text>
    </Card.Body>
  </Card>
);

Player.defaultProps = {
  name: 'Inconnu',
  team: 'Inconnu',
  nationality: 'Inconnu',
  jerseyNumber: 0,
  age: 0,
  imageUrl: 'url par défaut'
};
export default Player;