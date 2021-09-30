import * as React from 'react';
import {Link, graphql} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from '../Components/Seo';
import Layout from '../Components/Layout';

export const query = graphql`
    query CocktailQuery {
  file(name: {eq: "cocktail"}) {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED)
    }
  }
}

`
export default function AboutPage({data}) {

    return (
        <Layout 
        title = "About this Page"
        description = "this is about page"
        >
            <GatsbyImage 
            image = {getImage(data.file)}
            alt = "funfun bar"
            />
            <h1>hello about frontend Masters</h1>
            <Link to = "/">home</Link>
        </Layout>
    )
}