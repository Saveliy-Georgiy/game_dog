import React from "react"
import styles from "./Game.module.css";
import music from "./../music/vystrel-drobovika.mp3";
import Fields from "./Fields/Fields";
import Counter from "./Counter/Counter";

class Game extends React.Component {

    audioRef = React.createRef();

    state = {
        circle: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        randomIndex: 0,
        currentValue: 0,
    };

    componentDidMount() {
        setInterval(this.setRandomImageIndex, 1000);
    }

    setRandomImageIndex = () => {
        this.setState({
            randomIndex: Math.floor(Math.random() * 9)
        });
    };

    inc = () => {
        let audio = this.audioRef.current;
        // перемотать трек в начало перед проигрыванием
        audio.currentTime = 0;
        // даём команду плееру - играй
        audio.play();
            this.setState({
                currentValue: this.state.currentValue + 1,
            });
    };

    render = () => {
        return (
            <div className={styles.mainBlock}>
                <div className={styles.wrapper}>
                    <Fields
                        circles={this.state.circle}
                        randomIndex={this.state.randomIndex}
                        inc={this.inc}/>
                </div>
                <audio src={music} ref={this.audioRef}/>
                <Counter currentValue={this.state.currentValue}/>
            </div>
        );
    };
}

export default Game;
