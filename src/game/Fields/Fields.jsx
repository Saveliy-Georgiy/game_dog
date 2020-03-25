import React from 'react';
import styles from './Fields.module.css'
import Field from "./Field/Field";

class Fields extends React.Component {

    render = () => {
        let circle = this.props.circles.map((c, index) =>
            <Field
                key={index}
               visiblePicture = {index === this.props.randomIndex}
                inc={this.props.inc}
    />);

        return (
            <div className={styles.mainBlock}>
                {circle}
            </div>
        );
    }
}

export default Fields;
