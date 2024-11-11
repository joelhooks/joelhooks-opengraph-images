/** @jsx jsx */
import {jsx, Global} from '@emotion/core'
import Textfit from 'react-textfit'
import {render} from 'react-dom'
import Twemoji from 'react-twemoji'

function App() {
  return (
    <div
      css={{
        width: 1200,
        height: 630,
        background: `url(https://res.cloudinary.com/badass-courses/image/upload/v1731348595/social-image-templates/joelhooks-com_sdeoc5.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
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
          '.emoji': {
            height: '1em',
            width: '1em',
            margin: '0 .05em 0 .1em',
            verticalAlign: '-0.1em',
          },
        }}
      />

      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          padding: '40px',
        }}
      >
        <h1
          css={{
            color: '#bcbcbe',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          <Textfit
            max={128}
            min={48}
            style={{
              minHeight: '80%',
              maxHeight: '80%',
              lineHeight: 1.2,
            }}
          >
            <Twemoji
              options={{className: 'emoji', folder: 'svg', ext: '.svg'}}
            >
              {window.title}
            </Twemoji>
          </Textfit>
        </h1>
      </div>
    </div>
  )
}

render(<App />, document.getElementById('corgi'))
