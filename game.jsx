import { TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Text, View } from '@/components/Themed';

export default function Game() {
    const [resetGame, setrsetGame] = useState(true);
    const [playerPoints, setplayerPoints] = useState(0);
    const [aiPoints, setaiPoints] = useState(0);
    const [result, setresult] = useState('');
    const [bot, setbot] = useState('');
    const [Answer, setanswer] = useState('');


    function ComputerMove(move) {

        const moves = ['Rock', 'Papper', 'Scissors'];
        setbot(moves[Math.floor(Math.random() * moves.length)]);
        setresult(move);
        resetgame();
        console.log(result);
        console.log(bot);

        if (
            (result === 'Rock' && bot === 'Scissors') ||
            (result === 'Papper' && bot === 'Rock') ||
            (result === 'Scissors' && bot === 'Papper')
        ) {
            setanswer('You win');
            setplayerPoints(p => p + 1);
        } else if (result === bot) {
            setanswer('Game Tied');
        } else {
            setanswer('You lose');
            setaiPoints(a => a + 1);
        }
        if (aiPoints === 3 || playerPoints === 3) {
            setrsetGame(false);
        }
    }
    function resetgame() {
        if (!resetGame) {
            setaiPoints(0);
            setplayerPoints(0);
            setbot('');
            setresult('');
            setrsetGame(true);
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.ai}>
                <Text style={styles.answer}>{bot}</Text>
            </View>
            <View style={styles.player}>
                <Text style={styles.answer}>{result}</Text>
            </View>
            <View style={styles.btns}>
                <View style={styles.score}>
                    <Text style={styles.red}>{aiPoints}</Text>
                    <Text style={styles.point}>.</Text>
                    <Text style={styles.blue}>{playerPoints}</Text>
                </View>
                <View style={styles.exitBtn}>
                    <Text style={styles.exit}>Exit</Text>
                </View>
            </View>

            <View style={styles.buttons}>
                {resetGame ? (
                    <>
                        <TouchableOpacity onPress={() => { ComputerMove('Rock') }} style={styles.btn}>
                            <Text style={styles.text}>R</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { ComputerMove('Papper') }} style={styles.btn}>
                            <Text style={styles.text}>P</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { ComputerMove('Scissors') }} style={styles.btn}>
                            <Text style={styles.text}>S</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <View style={styles.resetButton}>
                        <TouchableOpacity style={styles.reset} onPress={() => resetgame()}>
                            <Text style={styles.resetText}>Reset</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            <View style={styles.message}>
                <Text style={styles.msg}>{Answer}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    ai: {
        width: '15%',
        height: '15%',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '40%',
        bottom: '70%'
    },
    player: {
        width: '15%',
        height: '15%',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '40%',
        top: '50%'
    },
    btns: {
        width: '100%',
        height: '20%',
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        flexDirection: 'row',
        transform: 'translateY(40%)',
    },
    answer: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    score: {
        width: '15%',
        height: '70%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'translateX(-40%)',
    },
    red: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red'
    },
    point: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    blue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue'
    },
    exitBtn: {
        width: '15%',
        height: '70%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'translateX(40%)',
    },
    exit: {
        transform: 'rotate(270deg)',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10
    },
    buttons: {
        flexDirection: 'row',
        width: '100%',
        height: '20%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: '80%'
    },
    btn: {
        height: '90%',
        width: '20%',
        backgroundColor: 'grey',
        borderWidth: 5,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    message: {
        position: 'absolute',
        top: '-20%',
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    msg: {
        fontSize: 30,
        color: 'red',
        fontWeight: 'bold',
    },
    resetButton: {
        position: 'absolute',
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    reset: {
        width: '60%',
        height: '80%',
        backgroundColor: 'red',
        borderRadius: 20,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resetText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    }
});