import React from "react"

import Layout from "../components/layout";
import {Helmet} from "react-helmet";
import Video from "../components/video";
import Pagination from "../components/pagination"

const Tags = ({pageContext, data}) => {
    const {tag} = pageContext;

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{tag}</title>
            </Helmet>
            <div className='row'>
                {pageContext.posts.map((video) => {
                    const node = {node:video}
                    return (
                    <div className='col-md-4' key={video.id}>
                        <Video video={node}/>
                     </div>
                    )
                })}
                <div className='col-12'>
                    <Pagination context={pageContext} />
                </div>
            </div>
        </Layout>
    )
}
export default Tags
