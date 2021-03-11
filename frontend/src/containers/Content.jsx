import React, { Component } from 'react'
import Footer from '../templates/Footer'

import Menu from '../templates/Menu'
import NewsCrud from './NewsCrud'

class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu />
                {/* <NewsCrud /> */}
                <Footer />
            </React.Fragment>
        )
    }
}

export default Content