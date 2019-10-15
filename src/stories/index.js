import {
  color,
  files,
  select,
  withKnobs,
} from '@storybook/addon-knobs';

import {PlayingCards} from '../components/react-playing-cards';
import React from 'react';
import {WhatIsStorybook} from '../components/what-is-storybook';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Playing Cards', module);

stories.addParameters({ options: { 
  panelPosition: 'right',
  showPanel: true,
}})

stories.add('What is Storybook?', () => (
  <React.Fragment>
    <WhatIsStorybook />
  </React.Fragment>
))

stories.add('Pick a card, any card', () => (
  <React.Fragment>
    <PlayingCards 
      advert={files(
        `Advert`, 
        '.png, .jpg'
      )}
      rank={ select(`Rank`, {
        Ace: `A`, Two: `2`, Three: `3`, Four: `4`,
        Five: `5`, Six: `6`, Seven: `7`, Eight: `8`,
        Nine: `9`, Ten: `T`, Jack: `J`, Queen: `Q`, King: `K`
      }, `A`)}
      suit={ select(`Suit`, {
        Diamonds: `D`,
        Hearts: `H`,
        Spades: `S`,
        Clubs: `C`
      }, `C`)}
      redSuit={color(`Red Suits`, `#D33E43`)}
      blackSuit={color(`Black Suits`, `#010000`)}
      face={color(`Face`, `#F7F6F1`)} 
      back={color(`Back`, `#C62F47`)} // 276473
      border={color(`Borders`, `#ddd`)}
      facing={ select(`Facing`, {
        Up: `up`,
        Down: `down`
      }, `down`)}
    />
  </React.Fragment>
))

stories.addDecorator(withKnobs);
