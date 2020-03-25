import React from 'react';
import styles from './Counter.module.css'

class Counter extends React.Component {

    render = () => {

        return (
            <div className={styles.counter}>
                {this.props.currentValue}
            </div>
        );
    }
}

export default Counter;
