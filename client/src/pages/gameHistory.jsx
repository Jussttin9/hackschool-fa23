// Import the GameHistory component
import GameHistoryCard from "@/components/game-history-component/gameHistory";
import styles from '../components/game-history-component/gameHistory.module.css';


export default function GameHistory() {
    return (
        <div className={styles.container}>
            <h1>Previous Games</h1>
            <div className={styles.cardContainer}>
                {/* Container for top 3 games */}
                <GameHistoryCard sentence="boo, I scared you there didn't I?" correct="42" incorrect="8" wpm="42" time="1.00"/>
                <GameHistoryCard sentence="boo, I scared you there didn't I?" correct="42" incorrect="8" wpm="42" time="1.00"/>
                <GameHistoryCard sentence="boo, I scared you there didn't I?" correct="42" incorrect="8" wpm="42" time="1.00"/>
                {/* Container for all games */}
            </div>
        </div>
    );
}