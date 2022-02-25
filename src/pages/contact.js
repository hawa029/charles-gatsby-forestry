import React from "react"
import Layout from "../components/Layout"
import infoStyles from "../styles/pages/contact.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function Contact() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="contact" bgColor={infoData.background_color}>
      <section className={infoStyles.info_blurb}>
        <h2>
          <div dangerouslySetInnerHTML={{__html: infoData.description}}></div>
          <div dangerouslySetInnerHTML={{__html: infoData.cta}}></div>
        </h2>
        <ul>
          <li>
            <p>
              <a href={`mailto:${infoData.contact.email}`}>Email: {infoData.contact.email}</a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://twitter.com/${infoData.contact.twitter_handle}`}>
                Twitter: @{infoData.contact.twitter_handle}
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://github.com/${infoData.contact.github_handle}`}>Github: {infoData.contact.github_handle}</a>
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  )
}