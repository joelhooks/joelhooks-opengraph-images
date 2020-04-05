/** @jsx jsx */
import {jsx, Global} from '@emotion/core'
import Textfit from 'react-textfit'
import {render} from 'react-dom'

function App() {
  return (
    <div
      css={{
        width: 1200,
        height: 630,
        background: `rgb(255, 20, 147)`,
        position: 'absolute',
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <Global
        styles={{
          '*': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
            fontFamily: 'system-ui',
          },
        }}
      />
      <div
        css={{
          background: '#041016',
          margin: '40px',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: 15,
          padding: '8rem',
          boxShadow: `
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07)`,
        }}
      >
        <h1
          css={{
            color: '#E9F5FB',
            height: '100%',
            textAlign: 'center',
          }}
        >
          <Textfit
            max={256}
            min={24}
            style={{
              minHeight: '80%',
              maxHeight: '80%',
              lineHeight: 1,
            }}
          >
            {window.title}
          </Textfit>
        </h1>
        <div
          css={{
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 36,
            margin: '-6rem',
          }}
        >
          <ul
            css={{
              listStyleType: 'none',
              display: 'flex',
              '& li': {
                marginRight: '.5rem',
                '&:not(:last-child):after': {
                  content: "'•'",
                  marginLeft: '.5rem',
                },
              },
            }}
          >
            {window.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div>
            <img
              css={{
                height: '100px',
                width: '100px',
              }}
              src={window.image}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

render(<App />, document.getElementById('corgi'))
