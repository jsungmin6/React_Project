import React, { Component } from 'react'
import PropsTypes from 'prop-types'

class MyComponent extends Component {
    render() {
        const name = this.props.name
        return (
            <span>
                {name}
            </span>
        )
    }
}

//props 자료형 선언 오류방지. name은 string을 받는다는 명시.
MyComponent.propTypes = {
    name: PropsTypes.string,
};

export default MyComponent;


