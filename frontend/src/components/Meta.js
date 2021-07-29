import React from 'react'
import {Helmet} from 'react-helmet'

const Meta = ({title, description, keywrods}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywrods} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title:'Welcome to BelonjoKu',
    description:'We sell the best products for cheap',
    keywords:'electronics, buy electronics, cheap electroincs'

}

export default Meta
