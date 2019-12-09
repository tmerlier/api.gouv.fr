import React from 'react'

import { useInput } from '../hooks/input'

const SEARCH_EXAMPLES = [
  "quotient familial",
  "revenu fiscal de référence",
  "cadastre",
  "…",
]

const APISearchBar = () => {
  const [input, setInput] = useInput("")

  return (
    <div className="ui search">
      <div className="ui fluid left icon input">
        <input
          value={input}
          className="prompt"
          placeholder={SEARCH_EXAMPLES.join(",")}
          type="search"
          onChange={setInput}
        />
        <i className="search icon" />
      </div>

      <div className="results transition hidden" />

      <style jsx>{`
        input:focus::-webkit-input-placeholder {
          color: transparent !important;
        }
        input:focus::-moz-placeholder {
          color: transparent !important;
        }

        .input {
          min-width: 60%;
          margin-bottom: 3%;
        }

        .results {
          width: 100%;
        }

        .results .searchError {
          margin-top: 1em;
        }

        .results .result-highlight {
          font-weight: 600;
          color: black;
        }
      `}</style>
    </div>
  );
}

export default APISearchBar