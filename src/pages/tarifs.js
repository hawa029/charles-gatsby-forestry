import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"

export default function tarifsPage() {
  return (
    <Layout page="tarifs" bgColor="inherit">
      <section>
        <BlogList />
      </section>
    </Layout>
  )
}