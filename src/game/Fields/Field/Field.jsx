import React from "react";
import styles from "./Field.module.css";
import dog from "../../../pictures/gryphon.jpg";

class Field extends React.Component {

    render = () => {
        return (
            <div className={styles.item}>
                <img
                    src={dog}
                    className={styles.photo + ' ' + (this.props.visiblePicture
                        ? styles.show
                        : styles.hidden)}
                    alt="dog"
                    onClick={this.props.visiblePicture ? this.props.inc : ' '}/>
            </div>
        );
    };
}

export default Field;
