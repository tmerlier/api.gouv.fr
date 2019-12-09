import React from 'react';
import Link from 'next/link'
import getConfig from 'next/config'
import PropTypes from 'prop-types';

const {
  publicRuntimeConfig: { DEFAULT_LOGO }
} = getConfig();

const ApiCard = ({slug, title, logo, owner, tagline, partners, keywords}) => (
  <>
    <Link href={`/api/${slug}`}>
      <a className="ui fluid card api-card">
      <div className="content">
        {logo ? (
          <img className="right floated mini ui image" src={`/static/images/api-logo/${logo}`} alt={`logo de ${title}`}/>
        ) : (
          <img className="right floated mini ui image" src={`/static/images/${DEFAULT_LOGO}`} alt="logo générique api.gouv"/>
        )}

        <div className="header">{ title }</div>
        <div className="meta">
          {owner}
        </div>

        <div className="description">
          { tagline }
        </div>
      </div>
      <div className="extra content">
        {partners.length > 0 && (
          <>
            <small>Partenaires</small>
            <div>
              {partners.map(partner => (
                <div key={`${slug}-${partner}`} className="ui tiny label">
                  {partner}
                </div>
              ))}
            </div>
          </>
        )}

        {keywords.length > 0 && (
          <>
            <small>Tags</small>
            <div>
              {keywords.map(keyword => (
                <div key={`${slug}-${keyword}`} className="ui tiny label api-tag">
                  {keyword}
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </a>
    </Link>

    <style jsx>{`
      .ui.tiny.label {
        margin-bottom: 2px;
      }
    `}</style>
  </>
)

ApiCard.propTypes = {
  slug: PropTypes.string.isRequired,
  logo: PropTypes.string,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string,
  tagline: PropTypes.string,
  partners: PropTypes.array,
  keywords: PropTypes.array,
}

ApiCard.defaultProps = {
  logo: null,
  partners: [],
  keywords: [],
}

export default ApiCard;