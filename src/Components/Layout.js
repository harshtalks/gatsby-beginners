import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Seo from './Seo';
import '../styles/global.css'
import {header, content} from '../styles/layout.module.css'

const Layout = ({
    children,
    title = false,
    desription = false,
    image = false,
    path = false,
}) => {
       const data = useStaticQuery(graphql`
        query getSiteTitle {
  site {
    siteMetadata {
      title
    }
  }
} `)
 

        const meta = data?.site?.siteMetadata ?? {};
    return (
        <div>
           <Seo title = {title} 
           desription = {desription} image = {image} path = {path}
           /> 
           <header className = {header}>
               <Link to = "/">{meta.title}</Link>
            <nav>
               <Link to = "/about">About</Link>
           </nav>
           </header>

          
           <main className = {content}>
               {children}
           </main>
        </div>
    )
}

export default Layout
