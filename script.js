* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: #232F3E;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #545B64;
}

.container {
    width: 100%;
    max-width: 800px;
    padding: 20px;
}

.quiz-box {
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

#start-screen {
    text-align: center;
}

#start-screen p {
    color: #666;
    font-size: 1.1rem;
    margin-bottom: 25px;
}

.timer {
    text-align: right;
    color: #EC7211;
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 15px;
}

.progress-container {
    margin-bottom: 25px;
}

.progress-bar {
    width: 100%;
    height: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 10px;
}

.progress {
    width: 0%;
    height: 100%;
    background-color: #FF9900;
    transition: width 0.3s ease;
}

#progress-text {
    text-align: center;
    color: #666;
    font-size: 0.9rem;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

#question {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 20px;
}

.choices {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
}

.choice-container {
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    margin-bottom: 10px;
}

.choice-letter {
    font-weight: bold;
    font-size: 1.2rem;
    color: #EC7211;
    min-width: 30px;
    text-align: center;
}

.choice {
    flex: 1;
    padding: 15px;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.choice-container:hover .choice {
    background-color: #f8f9fa;
    border-color: #ddd;
}

.choice-container .choice.selected {
    background-color: #FFF1E1;
    border-color: #FF9900;
}

.choice-container .choice.correct {
    background-color: #c8e6c9;
    border-color: #4caf50;
}

.choice-container .choice.incorrect {
    background-color: #ffcdd2;
    border-color: #f44336;
}

.submit-btn {
    width: 100%;
    padding: 15px;
    background-color: #FF9900;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

.submit-btn:hover {
    background-color: #EC7211;
}

.hide {
    display: none;
}

#results {
    text-align: center;
}

#results h2 {
    color: #333;
    margin-bottom: 15px;
}

#score {
    font-weight: bold;
    color: #EC7211;
}

/* Navigation Styles */
.quiz-navigation {
    margin-bottom: 20px;
}

.questions-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 20px;
    padding: 0 20px;
}

.questions-list {
    background-color: #f8f9fa;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 10px 15px;
    overflow-x: scroll;
    white-space: nowrap;
    flex: 1;
    display: flex;
    gap: 15px;
    scroll-behavior: smooth;
    width: calc(55px * 10); /* 55px = button width(40px) + gap(15px) */
    margin: 0 auto;
    justify-content: flex-start;
    align-items: center;
    -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on iOS */
    scrollbar-width: none; /* Hide scrollbar for Firefox */
    -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */
    padding: 10px 20px;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
}

.questions-list::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome/Safari */
}

.scroll-btn {
    background-color: #FF9900;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.scroll-btn:hover {
    background-color: #EC7211;
    transform: scale(1.05);
}

.scroll-btn:disabled {
    background-color: #FFE5CC;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

.question-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: #545B64;
    text-decoration: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: white;
    border: 2px solid #e0e0e0;
    font-weight: bold;
    flex-shrink: 0;
    scroll-snap-align: center;
}

.question-link:hover {
    background-color: #FFF1E1;
    color: #EC7211;
}

.question-link.current {
    background-color: #FF9900;
    color: white;
}

.question-link.answered-correct {
    background-color: #c8e6c9;
    border: 2px solid #4caf50;
    color: #2e7d32;
}

.question-link.answered-incorrect {
    background-color: #ffcdd2;
    border: 2px solid #f44336;
    color: #c62828;
}
