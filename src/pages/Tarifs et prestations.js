import React from "react"
import Layout from "../components/Layout"
import Tarifs from "../components/Tarifs"

export default function tarifsPage() {
  return (
    <Layout page="tarifs et prestations" bgColor="inherit">
      <section>
        <Tarifs />
      </section>
    </Layout>
  )
}