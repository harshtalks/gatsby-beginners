import React from 'react'
import {Link} from 'gatsby';
import Layout from './Layout'

const PostLayout = ({children, pageContext}) => {
    const {title,description} = pageContext
    return (
        <Layout title = {title} desription = {description}>
            {children}
            <Link to = "/">&larr; back</Link>
        </Layout>
    )
}

export default PostLayout
