
  const brainTeasers = [
    { question: "What comes next in the sequence: 1, 1, 2, 3, 5, 8, ___?", options: ["13", "10", "15", "11"], answer: "13" },
    { question: "If two's company and three's a crowd, what are four and five?", options: ["Nine", "Trouble", "Party", "Numbers"], answer: "Nine" },
    { question: "What gets wetter the more it dries?", options: ["Towel", "Rain", "Sponge", "Cloud"], answer: "Towel" },
    { question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", options: ["Candle", "Tree", "Pencil", "Shadow"], answer: "Candle" },
    { question: "If you have me, you want to share me. If you share me, you don't have me. What am I?", options: ["Secret", "Money", "Time", "Trust"], answer: "Secret" },
    { question: "What number comes next: 2, 4, 8, 16, ___?", options: ["20", "24", "32", "18"], answer: "32" },
    { question: "Which weighs more: a pound of feathers or a pound of bricks?", options: ["Feathers", "Bricks", "Same", "None"], answer: "Same" },
    { question: "What has keys but can't open locks?", options: ["Map", "Piano", "Box", "Book"], answer: "Piano" },
    { question: "What can travel around the world while staying in the same corner?", options: ["Stamp", "Compass", "Clock", "Mirror"], answer: "Stamp" },
    { question: "What goes up but never comes down?", options: ["Balloon", "Smoke", "Age", "Cloud"], answer: "Age" },
    { question: "Which word is spelled incorrectly in every dictionary?", options: ["Incorrectly", "Wrong", "Mistake", "None"], answer: "Incorrectly" },
    { question: "I have cities but no houses, rivers but no water, and forests but no trees. What am I?", options: ["Map", "Dream", "Puzzle", "Book"], answer: "Map" },
    { question: "Before Mt. Everest was discovered, what was the highest mountain in the world?", options: ["K2", "Everest", "Kanchenjunga", "Makalu"], answer: "Everest" },
    { question: "What has hands but can’t clap?", options: ["Clock", "Robot", "Human", "Table"], answer: "Clock" },
    { question: "If a plane crashes on the border of the US and Canada, where do they bury the survivors?", options: ["US", "Canada", "Border", "Nowhere"], answer: "Nowhere" },
    { question: "What has a head, a tail, but no body?", options: ["Coin", "Snake", "Nail", "Chair"], answer: "Coin" },
    { question: "Which is faster: light or sound?", options: ["Light", "Sound", "Same", "Depends"], answer: "Light" },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", options: ["M", "Time", "Clock", "Eternity"], answer: "M" },
    { question: "How many months have 28 days?", options: ["1", "2", "12", "Depends"], answer: "12" },
    { question: "What begins with T, ends with T, and has T in it?", options: ["Teapot", "Tattoo", "Toast", "Tablet"], answer: "Teapot" },
    { question: "What has one eye but can't see?", options: ["Needle", "Storm", "Potato", "Button"], answer: "Needle" },
    { question: "What gets broken without being held?", options: ["Promise", "Glass", "Secret", "Egg"], answer: "Promise" },
    { question: "What has an endless supply of letters but starts empty?", options: ["Mailbox", "Dictionary", "Email", "Book"], answer: "Mailbox" },
    { question: "What kind of room has no doors or windows?", options: ["Mushroom", "Classroom", "Bathroom", "Living Room"], answer: "Mushroom" },
    { question: "What can you catch but not throw?", options: ["Cold", "Ball", "Wind", "Shadow"], answer: "Cold" },
    { question: "What has many teeth but can’t bite?", options: ["Comb", "Zipper", "Saw", "Fork"], answer: "Comb" },
    { question: "What has words but never speaks?", options: ["Book", "Radio", "Scroll", "Pen"], answer: "Book" },
    { question: "What has legs but doesn’t walk?", options: ["Table", "Fan", "Box", "Lamp"], answer: "Table" },
    { question: "What runs but never walks?", options: ["Water", "Clock", "Fan", "Shadow"], answer: "Water" },
    { question: "What comes down but never goes up?", options: ["Rain", "Tears", "Leaf", "Time"], answer: "Rain" },
    { question: "A man shaves several times a day but still has a beard. Who is he?", options: ["Barber", "Actor", "Magician", "Hipster"], answer: "Barber" },
    { question: "How many sides does a circle have?", options: ["2", "1", "0", "Infinite"], answer: "2" },
    { question: "Which 3 numbers give the same result when added and multiplied?", options: ["1, 2, 3", "2, 2, 2", "3, 3, 3", "1, 1, 1"], answer: "1, 2, 3" },
    { question: "You see me once in June, twice in November, but not at all in May. What am I?", options: ["E", "N", "U", "O"], answer: "E" },
    { question: "What comes at the end of everything?", options: ["G", "End", "Thing", "Y"], answer: "G" },
    { question: "A farmer has 17 sheep and all but 9 run away. How many does he have left?", options: ["9", "17", "8", "0"], answer: "9" },
    { question: "What can be cracked, made, told, and played?", options: ["Joke", "Code", "Game", "Glass"], answer: "Joke" },
    { question: "The more you take, the more you leave behind. What are they?", options: ["Footsteps", "Memories", "Words", "Clues"], answer: "Footsteps" },
    { question: "What has a neck but no head?", options: ["Bottle", "Shirt", "Guitar", "Chair"], answer: "Bottle" },
    { question: "What comes in a minute, twice in a moment, but never in a thousand years?", options: ["M", "N", "O", "Time"], answer: "M" },
    { question: "What five-letter word becomes shorter when you add two letters to it?", options: ["Short", "Small", "Tiny", "Little"], answer: "Short" },
    { question: "What has four fingers and a thumb but is not alive?", options: ["Glove", "Mitten", "Sculpture", "Clock"], answer: "Glove" },
    { question: "A cowboy rode into town on Friday. He stayed three days and left on Friday. How?", options: ["Horse named Friday", "Time loop", "Mistake", "Dream"], answer: "Horse named Friday" },
    { question: "What invention lets you look right through a wall?", options: ["Window", "Camera", "Mirror", "Glasses"], answer: "Window" },
    { question: "What is always in front of you but can’t be seen?", options: ["Future", "Wind", "Air", "Hope"], answer: "Future" },
    { question: "What has to be broken before you can use it?", options: ["Egg", "Seal", "Door", "Puzzle"], answer: "Egg" },
    { question: "What kind of band never plays music?", options: ["Rubber band", "Headband", "Wristband", "Band-aid"], answer: "Rubber band" },
    { question: "What is full of holes but still holds water?", options: ["Sponge", "Strainer", "Bucket", "Net"], answer: "Sponge" },
    { question: "What starts with an E, ends with an E, but only contains one letter?", options: ["Envelope", "Eye", "Eve", "Elite"], answer: "Envelope" },
    { question: "What is so fragile that saying its name breaks it?", options: ["Silence", "Secret", "Peace", "Glass"], answer: "Silence" },
    { question: "What is the longest word in the dictionary?", options: ["Pneumonoultramicroscopicsilicovolcanoconiosis", "Supercalifragilisticexpialidocious", "Uncharacteristically", "Antidisestablishmentarianism"], answer: "Pneumonoultramicroscopicsilicovolcanoconiosis" },
      { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", options: ["M", "O", "N", "I"], answer: "M" },
      { question: "I am not alive, but I grow. I do not have lungs, but I need air. What am I?", options: ["Fire", "Cloud", "Bacteria", "Candle"], answer: "Fire" },
      { question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", options: ["Candle", "Tree", "Pencil", "Shadow"], answer: "Candle" },
      { question: "If you have me, you want to share me. If you share me, you don’t have me. What am I?", options: ["Secret", "Money", "Time", "Trust"], answer: "Secret" },
      { question: "What is always in front of you but can’t be seen?", options: ["The future", "Wind", "Time", "Dreams"], answer: "The future" },
      { question: "What has a heart that doesn’t beat?", options: ["Artichoke", "Clock", "Candle", "Rock"], answer: "Artichoke" },
      { question: "What is lighter than air, but even the world’s strongest man couldn’t hold it for much longer than a minute?", options: ["Breath", "Cloud", "Feather", "Smoke"], answer: "Breath" },
      { question: "What has an eye but can’t see?", options: ["Needle", "Storm", "Potato", "Button"], answer: "Needle" },
      { question: "The more you take, the more you leave behind. What are they?", options: ["Footsteps", "Memories", "Clues", "Words"], answer: "Footsteps" },
      { question: "What has a neck but no head?", options: ["Bottle", "Shirt", "Guitar", "Chair"], answer: "Bottle" },
      { question: "What gets wetter the more it dries?", options: ["Towel", "Sponge", "Rain", "Cloud"], answer: "Towel" },
      { question: "What can be cracked, made, told, and played?", options: ["Joke", "Code", "Game", "Glass"], answer: "Joke" },
      { question: "What runs but never walks?", options: ["Water", "Clock", "Fan", "Shadow"], answer: "Water" },
      { question: "What comes down but never goes up?", options: ["Rain", "Tears", "Leaf", "Time"], answer: "Rain" },
      { question: "A man shaves several times a day but still has a beard. Who is he?", options: ["Barber", "Actor", "Magician", "Hipster"], answer: "Barber" },
      { question: "How many sides does a circle have?", options: ["2", "1", "0", "Infinite"], answer: "2" },
      { question: "Which 3 numbers give the same result when added and multiplied?", options: ["1, 2, 3", "2, 2, 2", "3, 3, 3", "1, 1, 1"], answer: "1, 2, 3" },
      { question: "What begins with T, ends with T, and has T in it?", options: ["Teapot", "Tattoo", "Toast", "Tablet"], answer: "Teapot" },
      { question: "What can travel around the world while staying in the same corner?", options: ["Stamp", "Compass", "Clock", "Mirror"], answer: "Stamp" },
      { question: "What kind of room has no doors or windows?", options: ["Mushroom", "Classroom", "Bathroom", "Living Room"], answer: "Mushroom" },
      { question: "What has many teeth but can’t bite?", options: ["Comb", "Zipper", "Saw", "Fork"], answer: "Comb" },
      { question: "What has hands but can’t clap?", options: ["Clock", "Robot", "Human", "Table"], answer: "Clock" },
      { question: "What has an endless supply of letters but starts empty?", options: ["Mailbox", "Dictionary", "Email", "Book"], answer: "Mailbox" },
      { question: "What is so fragile that saying its name breaks it?", options: ["Silence", "Secret", "Peace", "Glass"], answer: "Silence" },
      { question: "What has four fingers and a thumb but is not alive?", options: ["Glove", "Mitten", "Sculpture", "Clock"], answer: "Glove" },
      { question: "What comes at the end of everything?", options: ["G", "End", "Thing", "Y"], answer: "G" },
      { question: "What has legs but doesn’t walk?", options: ["Table", "Fan", "Box", "Lamp"], answer: "Table" },
      { question: "The more you take, the more you leave behind. What are they?", options: ["Footsteps", "Memories", "Words", "Clues"], answer: "Footsteps" },
      { question: "What is always in front of you but can’t be seen?", options: ["The future", "Wind", "Time", "Dreams"], answer: "The future" },
      { question: "What starts with an E, ends with an E, but only contains one letter?", options: ["Envelope", "Eye", "Eve", "Elite"], answer: "Envelope" },
      { question: "What is full of holes but still holds water?", options: ["Sponge", "Strainer", "Bucket", "Net"], answer: "Sponge" },
      { question: "What invention lets you look right through a wall?", options: ["Window", "Camera", "Mirror", "Glasses"], answer: "Window" },
      { question: "What can you catch but not throw?", options: ["Cold", "Ball", "Wind", "Shadow"], answer: "Cold" },
      { question: "What is lighter than air, but even the world’s strongest man couldn’t hold it for much longer than a minute?", options: ["Breath", "Cloud", "Feather", "Smoke"], answer: "Breath" },
      { question: "What begins with T, ends with T, and has T in it?", options: ["Teapot", "Tattoo", "Toast", "Tablet"], answer: "Teapot" },
      { question: "What has an eye but can’t see?", options: ["Needle", "Storm", "Potato", "Button"], answer: "Needle" },
      { question: "What has a neck but no head?", options: ["Bottle", "Shirt", "Guitar", "Chair"], answer: "Bottle" },
      { question: "What is always in front of you but can’t be seen?", options: ["Future", "Wind", "Air", "Hope"], answer: "Future" },
      { question: "What has hands but can’t clap?", options: ["Clock", "Robot", "Human", "Table"], answer: "Clock" },
      { question: "What can be cracked, made, told, and played?", options: ["Joke", "Code", "Game", "Glass"], answer: "Joke" },
      { question: "What runs but never walks?", options: ["Water", "Clock", "Fan", "Shadow"], answer: "Water" },
      { question: "What has words but never speaks?", options: ["Book", "Radio", "Scroll", "Pen"], answer: "Book" },
      { question: "What has many teeth but can’t bite?", options: ["Comb", "Zipper", "Saw", "Fork"], answer: "Comb" },
      { question: "What can you catch but not throw?", options: ["Cold", "Ball", "Wind", "Shadow"], answer: "Cold" },
      { question: "What is always in front of you but can’t be seen?", options: ["Future", "Wind", "Time", "Dreams"], answer: "Future" },
      { question: "What is the longest word in the dictionary?", options: ["Pneumonoultramicroscopicsilicovolcanoconiosis", "Supercalifragilisticexpialidocious", "Uncharacteristically", "Antidisestablishmentarianism"], answer: "Pneumonoultramicroscopicsilicovolcanoconiosis" },
        { question: "What has one eye but can’t see?", options: ["Needle", "Storm", "Potato", "Button"], answer: "Needle" },
        { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", options: ["M", "O", "N", "I"], answer: "M" },
        { question: "What has a neck but no head?", options: ["Bottle", "Shirt", "Guitar", "Chair"], answer: "Bottle" },
        { question: "What is always in front of you but can’t be seen?", options: ["The future", "Wind", "Time", "Dreams"], answer: "The future" },
        { question: "What can travel around the world while staying in the same corner?", options: ["Stamp", "Compass", "Clock", "Mirror"], answer: "Stamp" },
        { question: "What comes at the end of everything?", options: ["G", "End", "Thing", "Y"], answer: "G" },
        { question: "What has a head, a tail, but no body?", options: ["Coin", "Snake", "Nail", "Chair"], answer: "Coin" },
        { question: "What begins with T, ends with T, and has T in it?", options: ["Teapot", "Tattoo", "Toast", "Tablet"], answer: "Teapot" },
        { question: "What has keys but can’t open locks?", options: ["Map", "Piano", "Box", "Book"], answer: "Piano" },
        { question: "What has hands but can’t clap?", options: ["Clock", "Robot", "Human", "Table"], answer: "Clock" },
        { question: "What runs but never walks?", options: ["Water", "Clock", "Fan", "Shadow"], answer: "Water" },
        { question: "What is lighter than air, but even the world’s strongest man couldn’t hold it for much longer than a minute?", options: ["Breath", "Cloud", "Feather", "Smoke"], answer: "Breath" },
        { question: "What has words but never speaks?", options: ["Book", "Radio", "Scroll", "Pen"], answer: "Book" },
        { question: "What has many teeth but can’t bite?", options: ["Comb", "Zipper", "Saw", "Fork"], answer: "Comb" },
        { question: "What is full of holes but still holds water?", options: ["Sponge", "Strainer", "Bucket", "Net"], answer: "Sponge" },
        { question: "What invention lets you look right through a wall?", options: ["Window", "Camera", "Mirror", "Glasses"], answer: "Window" },
        { question: "What is always in front of you but can’t be seen?", options: ["The future", "Wind", "Time", "Dreams"], answer: "The future" },
        { question: "What is the longest word in the dictionary?", options: ["Pneumonoultramicroscopicsilicovolcanoconiosis", "Supercalifragilisticexpialidocious", "Uncharacteristically", "Antidisestablishmentarianism"], answer: "Pneumonoultramicroscopicsilicovolcanoconiosis" },
        { question: "What can you catch but not throw?", options: ["Cold", "Ball", "Wind", "Shadow"], answer: "Cold" },
        { question: "What has one eye but can’t see?", options: ["Needle", "Storm", "Potato", "Button"], answer: "Needle" },
        { question: "What starts with an E, ends with an E, but only contains one letter?", options: ["Envelope", "Eye", "Eve", "Elite"], answer: "Envelope" },
        { question: "What has a neck but no head?", options: ["Bottle", "Shirt", "Guitar", "Chair"], answer: "Bottle" },
        { question: "What is always in front of you but can’t be seen?", options: ["The future", "Wind", "Time", "Dreams"], answer: "The future" },
        { question: "What comes down but never goes up?", options: ["Rain", "Tears", "Leaf", "Time"], answer: "Rain" },
        { question: "What can be cracked, made, told, and played?", options: ["Joke", "Code", "Game", "Glass"], answer: "Joke" },
        { question: "What runs but never walks?", options: ["Water", "Clock", "Fan", "Shadow"], answer: "Water" },
        { question: "What has words but never speaks?", options: ["Book", "Radio", "Scroll", "Pen"], answer: "Book" },
        { question: "What has many teeth but can’t bite?", options: ["Comb", "Zipper", "Saw", "Fork"], answer: "Comb" },
        { question: "What has a head, a tail, but no body?", options: ["Coin", "Snake", "Nail", "Chair"], answer: "Coin" },
        { question: "What is always in front of you but can’t be seen?", options: ["The future", "Wind", "Time", "Dreams"], answer: "The future" },
        { question: "What begins with T, ends with T, and has T in it?", options: ["Teapot", "Tattoo", "Toast", "Tablet"], answer: "Teapot" },
        { question: "What has keys but can’t open locks?", options: ["Map", "Piano", "Box", "Book"], answer: "Piano" },
        { question: "What has hands but can’t clap?", options: ["Clock", "Robot", "Human", "Table"], answer: "Clock" },
        { question: "What runs but never walks?", options: ["Water", "Clock", "Fan", "Shadow"], answer: "Water" },
        { question: "What is lighter than air, but even the world’s strongest man couldn’t hold it for much longer than a minute?", options: ["Breath", "Cloud", "Feather", "Smoke"], answer: "Breath" },
        { question: "What has words but never speaks?", options: ["Book", "Radio", "Scroll", "Pen"], answer: "Book" },
        { question: "What has many teeth but can’t bite?", options: ["Comb", "Zipper", "Saw", "Fork"], answer: "Comb" },
        { question: "What can you catch but not throw?", options: ["Cold", "Ball", "Wind", "Shadow"], answer: "Cold" }   
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  
  function displayQuestion() {
    const questionContainer = document.getElementById("quiz-container");
    const question = brainTeasers[currentQuestionIndex];
    
    // Clear previous content
    questionContainer.innerHTML = '';
  
    // Display question
    const questionElement = document.createElement('div');
    questionElement.classList.add('question-container');
    questionElement.innerHTML = `<h2>${question.question}</h2>`;
    questionContainer.appendChild(questionElement);
  
    // Display options
    const optionsList = document.createElement('ul');
    optionsList.classList.add('options');
    question.options.forEach(option => {
      const optionItem = document.createElement('li');
      optionItem.classList.add('option');
      optionItem.textContent = option;
      optionItem.onclick = () => checkAnswer(option);
      optionsList.appendChild(optionItem);
    });
  
    questionContainer.appendChild(optionsList);
  }
  
  function checkAnswer(selectedOption) {
    const correctAnswer = brainTeasers[currentQuestionIndex].answer;
  
    if (selectedOption === correctAnswer) {
      score++;
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
  
    // Update the score display
    document.getElementById("score").textContent = score;
  
    // Move to the next question
    currentQuestionIndex++;
  
    if (currentQuestionIndex < brainTeasers.length) {
      displayQuestion();
    } else {
      alert(`Quiz Finished! Your Final Score: ${score}`);
    }
  }
  
  // Start the quiz
  displayQuestion();