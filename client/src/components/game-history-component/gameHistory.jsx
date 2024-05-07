import styles from './gameHistory.module.css';

// Create a functional component that will display game history
// Remember to return one top-level div, and nest the rest of your elements inside of it
// It should take in props for the sentence, correctChars, incorrectChars, wpm, and time
// Export your GameHistory component!

const gameHistoryCard = (props) => {
    return (
        <div className={styles.card}>
            <p><b>Sentence:</b> {props.sentence}</p>
            <p><b>Correct Characters:</b> {props.correct}</p>
            <p><b>Incorrect Characters:</b> {props.incorrect}</p>
            <p><b>Words per Minute:</b> {props.wpm}</p>
            <p><b>Time (in min):</b> {props.time}</p>
        </div>
    )
};

export default gameHistoryCard;