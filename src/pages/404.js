import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import notFoundStyles from '../styles/pages/404.module.scss'

export default function NotFound() {
    return (
        <Layout page="404" bgColor="inherit">
            <div className={notFoundStyles.notFound__container}>
                <Link to="/">
                    <h1>Désolé, la page que vous recherchez est introuvable...</h1>
                </Link>
            </div>
        </Layout>
    )
}