import React from 'react'
import getConfig from "next/config"

import {getAllApi} from '../lib/api-mock'

import colors from '../styles/colors'

import Page from '../layouts/page'

import APISearchBar from '../components/api-search-bar'
import ApiCard from '../components/api-card'

const {
  publicRuntimeConfig: { SITE_DESCRIPTION }
} = getConfig();


const Home = ({apiList}) => {
  return (
    <Page>
      <section id="mission-statement">
        <div className="header-with-image">
          <img
            className="ui small image"
            src="/static/images/Apigouv_visual.svg"
            alt="Une API connecte des services à la puissance d'internet"
          />

          <div>
            <h1 className="ui header">{SITE_DESCRIPTION}</h1>
            <APISearchBar />
          </div>
        </div>
      </section>

      <section id="apis">
        <div className="ui container">
          <div className="ui three stackable cards">
            {apiList.map(api => (
              <ApiCard key={api.slug} {...api} />
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        #mission-statement {
          padding-top: 4em;
          padding-bottom: 4em;
        }

        section {
          padding: 4em 0;
        }

        h1 {
          padding: 0.2em 0;

          font-size: 200%;
          line-height: 1.8;
        }

        .header-with-image {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .header-with-image img {
            margin-right: 3em;
          }
        }

        section#apis {
          background: ${colors.backgroundBlue};
        }

        @media (max-width: 768px) {
          .header-with-image {
            flex-direction: column;
          }

          #mission-statement {
            padding: 4em 2em;
          }

          #mission-statement .header-with-image img {
            width: 30%;
            margin: 0;
          }

          #mission-statement h1 {
            padding: 0 10px;
            margin-top: 10px;
            font-size: 1.3em;
          }
        }
      `}</style>
    </Page>
)};

Home.getInitialProps = ({ query }) => {
  const apiList = getAllApi(query.apiId);
  return {apiList};
}

export default Home
