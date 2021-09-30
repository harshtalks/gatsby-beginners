import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Layout from '../Components/Layout'
import {imageWrapper} from '../styles/index.module.css'
import { StaticImage } from 'gatsby-plugin-image'

export default function IndexPage() {

    const data = useStaticQuery(graphql`
    query GetBlogList{
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      slug
      frontmatter {
        title
        description
        date(fromNow: true)
      }
    }
  }
  allSanityEpisode(sort: {fields: date, order: DESC}, limit: 20) {
    nodes {
      _id
      title
      guest {
        name
      }
      gatsbyPath(filePath: "/episode/{SanityEpisode.slug__current}")
    }
  }
}

    `)

    const posts = data.allMdx.nodes
    const episodes = data.allSanityEpisode.nodes;

    return (
        <Layout>
        <div className = {imageWrapper}>
          <StaticImage 
            src = "../images/ivana-la-61jg6zviI7I-unsplash.jpg"
            alt = "a cute corgi tryna steal your attention"
            placeholder = "blurred"
            width = {300}
            height = {300}
          />
        </div>
        <main>
            <h1>hello frontend Masters</h1>
            <Link to = "/about">About</Link>

            <h2>Check out my recent blog posts</h2>
            <ul>
                {posts.map(el => (
                   <li key = {el.id} >
                       <Link to = {el.slug}>{el.frontmatter.title}</Link>
                       <small>posted {el.frontmatter.date}</small>
                   </li> 
                ))}
            </ul>
            <h2>
              Latest Episodes of  <em>Learn with Legend Json</em>
            </h2>

            <ul>
              {episodes.map(el => (
                <li key = {el.id}>
                  <Link to = {el.gatsbyPath}>
                    {el.title} (with {el.guest?.[0]?.name})
                  </Link>
                </li>
              ))}
            </ul>
            <a href = "https://www.learnwithjason.dev/">watch all episodes</a>
        </main>
        </Layout>
    )
}