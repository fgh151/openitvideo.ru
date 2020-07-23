import React from "react"
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

export default function Home() {
    return (

    <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>'title</title>
        </Helmet>
        <div>
            Hello world!
        </div>
    </Layout>
    )
}
