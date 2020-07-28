import React from "react"
import Layout from "../components/layout";
import {Helmet} from "react-helmet";
import {graphql, Link, StaticQuery} from "gatsby";
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
         allVideosJson(limit: 12) {
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
                            <div className='col-12'>
                                <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link className="page-link" to={'/page/1'}>Все видео</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )
                }}
            />
        </Layout>
    )
}
