/** @jsx jsx */
import {jsx, Global} from '@emotion/core'
import Textfit from 'react-textfit'
import {render} from 'react-dom'
import Twemoji from 'react-twemoji'
import Arm from './arm'

function App() {
  return (
    <div
      css={{
        width: 1200,
        height: 675,
        background: `rgb(255, 10, 150)`,
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
          background: '#ffffff',
          margin: '30px',
          display: 'flex',
          padding: '15px',
          borderRadius: 5,
        }}
      >
        <div css={{width: '255px', transform: 'rotate(190deg)'}}>
          <Arm />
        </div>
        <div
          css={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5px',
          }}
        >
          <h1
            css={{
              color: '#444444',
              textAlign: 'center',
            }}
          >
            <Textfit
              max={256}
              min={56}
              style={{
                minHeight: '80%',
                maxHeight: '80%',
                lineHeight: 1,
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
    </div>
  )
}

render(<App />, document.getElementById('corgi'))
