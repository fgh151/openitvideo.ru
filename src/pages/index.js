import React from "react"
import Layout from "../components/layout";
import {Helmet} from "react-helmet";
import {graphql, StaticQuery} from "gatsby";
import Video from "../components/video";

export default function Home() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>video</title>
            </Helmet>
            <StaticQuery
                query={graphql`
        {
         allVideosJson {
    edges {
      node {
        id
        tags
        title
        url
      }
    }
  }
    }
      `}
                render={({
                             allVideosJson: {
                                 edges
                             }
                         }) => {

                    return (
                        <div className='row'>
                            {edges.map((video) => (
                                <div className='col-md-4' key={video.node.id}>
                                    <Video video={video}/>
                                </div>
                            ))}
                        </div>
                    )
                }}
            />
        </Layout>
    )
}
