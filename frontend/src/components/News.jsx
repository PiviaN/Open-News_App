import React from 'react'

import NewsCrud from '../containers/NewsCrud'

const News = props => {
    return (
        <div className="news">
            {props.children}
        </div>
    )
}

export default News