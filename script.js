const storyContainer = document.getElementById('story-container');
const storyText = document.getElementById('story-text');
const backgroundMusic = document.getElementById('background-music');

const stories = {
  start: {
    text: 'It\'s a dark, stormy night. You find yourself in front of a decrepit manor. The wind howls as the front door creaks open on its own. Do you dare to enter?',
    choices: [
      { text: 'Enter the manor', next: 'inside' },
      { text: 'Run away into the forest', next: 'forest' }
    ]
  },
  inside: {
    text: 'You step inside, and the door slams shut behind you. The smell of decay fills the air. You hear whispers echoing down the hall. Do you follow the whispers or explore upstairs?',
    choices: [
      { text: 'Follow the whispers', next: 'whispers' },
      { text: 'Go upstairs', next: 'upstairs' }
    ]
  },
  forest: {
    text: 'You run into the forest, but the darkness seems to swallow you whole. The trees close in around you. Suddenly, you see a pair of glowing eyes watching you from the shadows. Do you confront the creature or try to escape?',
    choices: [
      { text: 'Confront the creature', next: 'creature' },
      { text: 'Try to escape', next: 'escape' }
    ]
  },
  whispers: {
    text: 'You follow the whispers down a dark corridor, where you find an old, tattered book glowing on a dusty table. Do you open the book or leave it alone?',
    choices: [
      { text: 'Open the book', next: 'book' },
      { text: 'Leave it alone', next: 'alone' }
    ]
  },
  upstairs: {
    text: 'Upstairs, you find a room with a flickering candle and a dusty mirror. As you approach the mirror, a face appears, not your own but that of a ghostly figure. Do you speak to it or run away?',
    choices: [
      { text: 'Speak to the ghost', next: 'ghost' },
      { text: 'Run away', next: 'runaway' }
    ]
  },
  book: {
    text: 'You open the book and a surge of energy rushes through you. You feel strange, like something or someone is watching you. Suddenly, the room around you starts to shift. Do you close the book or continue reading?',
    choices: [
      { text: 'Close the book', next: 'close_book' },
      { text: 'Continue reading', next: 'read_more' }
    ]
  },
  alone: {
    text: 'You decide not to touch the book and turn to leave. But as you do, the whispers grow louder, more menacing. You try to run, but something pulls you back. The end.',
    choices: [
      { text: 'Restart', next: 'start' }
    ]
  },
  ghost: {
    text: 'The ghost speaks in riddles, offering you a chance to leave the manor unharmed if you solve its puzzle. Do you try to solve the riddle or run for your life?',
    choices: [
      { text: 'Solve the riddle', next: 'riddle' },
      { text: 'Run for your life', next: 'run_life' }
    ]
  },
  runaway: {
    text: 'You run, but the ghost follows you, laughing as it closes in. You trip on the stairs and fall. The end.',
    choices: [
      { text: 'Restart', next: 'start' }
    ]
  },
  creature: {
    text: 'You stand your ground, and the creature steps closer. Its eyes glow brighter as it approaches. Do you try to fight it or run again?',
    choices: [
      { text: 'Fight the creature', next: 'fight' },
      { text: 'Run again', next: 'run' }
    ]
  },
  escape: {
    text: 'You run, but this time you escape the creature. You find a road leading back to safety. The end.',
    choices: [
      { text: 'Restart', next: 'start' }
    ]
  },
  fight: {
    text: 'You fight the creature with all your might, but it overpowers you. The end.',
    choices: [
      { text: 'Restart', next: 'start' }
    ]
  },
  run: {
    text: 'You manage to escape the creature again, and find yourself back at the manor. The front door creaks open once more. The end.',
    choices: [
      { text: 'Restart', next: 'start' }
    ]
  },
  close_book: {
    text: 'You close the book, but the energy lingers. You feel as though something has changed, but you’re not sure what. The end.',
    choices: [
      { text: 'Restart', next: 'start' }
    ]
  },
  read_more: {
    text: 'You continue reading, and the world around you dissolves into darkness. You have become part of the story, trapped forever. The end.',
    choices: [
      { text: 'Restart', next: 'start' }
    ]
  }
};

function makeChoice(choiceIndex) {
  const currentStory = stories[storyContainer.dataset.currentStory];
  const nextStory = currentStory.choices[choiceIndex - 1].next;
  updateStory(nextStory);
}

function updateStory(storyKey) {
  const story = stories[storyKey];
  storyContainer.dataset.currentStory = storyKey;
  storyText.innerHTML = story.text;
  const choicesContainer = document.getElementById('choices');
  choicesContainer.innerHTML = '';
  story.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.innerText = choice.text;
    button.classList.add('choice-btn');
    button.onclick = () => makeChoice(index + 1);
    choicesContainer.appendChild(button);
  });
}

function changeTheme(theme) {
  document.body.className = theme;
}

function playMusic() {
  backgroundMusic.play();
}

function pauseMusic() {
  backgroundMusic.pause();
}

updateStory('start');
