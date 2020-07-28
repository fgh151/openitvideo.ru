import React from "react"

import {graphql} from "gatsby"
import Layout from "../components/layout";
import {Helmet} from "react-helmet";
import Video from "../components/video";

const Tags = ({pageContext, data}) => {
    const {tag} = pageContext;

    const edges = data.allVideosJson.edges;

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{tag}</title>
            </Helmet>
            <div className='row'>
                {edges.map((video) => (
                    <div className='col-md-4' key={video.node.id}>
                        <Video video={video}/>
                    </div>
                ))}
            </div>
        </Layout>
    )
}
export default Tags

export const pageQuery = graphql`
  query($tag: String){
    allVideosJson(filter: {tags: {in: [$tag]}}) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`