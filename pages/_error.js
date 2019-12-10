import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import Page from '../layouts/page'
import Meta from '../components/meta'

const messages = {
  500: 'Une erreur imprévue s’est produite',
  404: 'La page demandée n’a pas pu être trouvée'
}

class ErrorPage extends React.Component {
  static propTypes = {
    code: PropTypes.number,
    message: PropTypes.string
  }

  static defaultProps = {
    code: 500,
    message: null
  }

  static getInitialProps({ res, err }) {
    const code = res ? res.statusCode : (err ? err.statusCode : null)

    return { code }
  }

  render() {
    const { code, message } = this.props
    const title = `Erreur ${code}`
    const msg = code === 500 ? messages[500] : message || messages[code]

    return (
      <Page>
        <Meta title={title} description={msg} />

        <div id="errorContainer">
          <div>
            <h1>Oups</h1>
            <h2>Cette page n'existe pas</h2>
            <div className="back-home">
              <Link href="/">
                <a class="ui button">Retour à la page d’accueil</a>
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          #errorContainer {
            display: flex;
            height: 100%;
          }

          #errorContainer > div {
            display: flex;
            flex: 1;
            align-items: center;
            flex-direction: column;
            align-self: center;
          }

          h1,
          h2 {
            text-align: center;
            font-size: 200%;
            line-height: 1.8;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin: 0;
          }

          .back-home {
            display: flex;
            justify-content: center;
            width: 50%;
            border-top: 0.5em #3d4a99 solid;
            padding-top: 2em;
          }

          a {
            background-color: #3d4a99;
            color: white;
            text-align: center;
            margin: auto;
          }
        `}</style>
      </Page>
    );
  }
}

export default ErrorPage
