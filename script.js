let score = 0;
let currentScenario = 0;

const scenarios = [
    {
        scenario: "There's a severe drought in your region. What should you do?",
        choices: ["Increase irrigation", "Use rainwater harvesting", "Do nothing"],
        correctChoice: 2,
        rewards: "Good choice! Rainwater harvesting is sustainable.",
        penalties: "Incorrect! Excessive irrigation wastes groundwater."
    },
    {
        scenario: "You suspect groundwater contamination. How do you respond?",
        choices: ["Test water quality", "Ignore it", "Use more chemicals to clean it"],
        correctChoice: 1,
        rewards: "Great job! Testing ensures clean water.",
        penalties: "Wrong! Ignoring contamination is dangerous."
    },
    {
        scenario: "Your crops need more water during a dry spell. What’s the best action?",
        choices: ["Flood irrigation", "Drip irrigation", "Increase groundwater pumping"],
        correctChoice: 2,
        rewards: "Nice! Drip irrigation conserves water efficiently.",
        penalties: "Not ideal! Excessive groundwater pumping depletes reserves."
    }
];

function updateScenario() {
    const scenarioElement = document.getElementById('scenario');
    const buttons = document.getElementsByClassName('choice-button');
    
    scenarioElement.textContent = scenarios[currentScenario].scenario;
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = scenarios[currentScenario].choices[i];
    }

    document.getElementById('message').textContent = '';
    document.getElementById('next-scenario').style.display = 'none';
}

function makeChoice(choice) {
    const scenario = scenarios[currentScenario];
    const messageElement = document.getElementById('message');
    
    if (choice === scenario.correctChoice) {
        score += 10;
        messageElement.textContent = scenario.rewards;
    } else {
        score -= 5;
        messageElement.textContent = scenario.penalties;
    }

    document.getElementById('score').textContent = score;
    document.getElementById('next-scenario').style.display = 'block';
}

function nextScenario() {
    currentScenario++;
    if (currentScenario < scenarios.length) {
        updateScenario();
    } else {
        document.getElementById('scenario').textContent = "Congratulations! You've completed all scenarios.";
        document.getElementById('choices-container').style.display = 'none';
        document.getElementById('next-scenario').style.display = 'none';
    }
}

// Initialize the first scenario
updateScenario();
