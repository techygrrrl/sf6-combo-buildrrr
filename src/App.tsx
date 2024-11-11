import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateComboScreen } from './screens/CreateComboScreen/CreateComboScreen.tsx'
import { ViewComboScreen } from './screens/ViewComboScreen.tsx'
import { HomeScreen } from './screens/HomeScreen.tsx'
import { StrictMode } from 'react'

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/create" element={<CreateComboScreen />} />
          <Route path="/view/:encodedCombo" element={<ViewComboScreen />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

// http://localhost:40079/?c=eyJjaGFyYWN0ZXIiOiJjYW1teSIsIm1vdmVzIjpbeyJjaGFyYWN0ZXIiOiJjYW1teSIsIm5hbWUiOiJDcm91Y2hpbmcgbGlnaHQgcHVuY2giLCJoZWxwVGV4dCI6IiIsInJlc291cmNlcyI6eyJkcml2ZSI6MCwic3VwZXIiOjB9LCJpbnB1dHMiOlt7InRleHQiOiLihpMiLCJpbWFnZSI6ImtleS1kIn0seyJ0ZXh0IjoiSFAiLCJpbWFnZSI6Imljb25fcHVuY2hfaCJ9XX0seyJjaGFyYWN0ZXIiOiJjYW1teSIsIm5hbWUiOiJDcm91Y2hpbmcgbWVkaXVtIHB1bmNoIiwiaGVscFRleHQiOiIiLCJyZXNvdXJjZXMiOnsiZHJpdmUiOjAsInN1cGVyIjowfSwiaW5wdXRzIjpbeyJ0ZXh0Ijoi4oaTIiwiaW1hZ2UiOiJrZXktZCJ9LHsidGV4dCI6Ik1QIiwiaW1hZ2UiOiJpY29uX3B1bmNoX20ifV19LHsiY2hhcmFjdGVyIjoiY2FtbXkiLCJuYW1lIjoiU3BpcmFsIEFycm93IChIKSIsImhlbHBUZXh0IjoiIiwicmVzb3VyY2VzIjp7ImRyaXZlIjowLCJzdXBlciI6MH0sImlucHV0cyI6W3sidGV4dCI6IuKGkyIsImltYWdlIjoia2V5LWQifSx7InRleHQiOiLihpgiLCJpbWFnZSI6ImtleS1kciJ9LHsidGV4dCI6IuKGkiIsImltYWdlIjoia2V5LXIifSx7InRleHQiOiIrIiwiaW1hZ2UiOiJrZXktcGx1cyJ9LHsidGV4dCI6IkhLIiwiaW1hZ2UiOiJpY29uX2tpY2tfaCIsInN1ZmZpeCI6IkgifV19XX0=

/*
function App() {
  const combo = useComboFromUrl()

  const currentCharacter = useMemo(() => {
    if (!combo) return null

    return findCharacter(combo.character)
  }, [combo])
  // const characters = getAllCharacters()

  //
  // const currentCharacter = findCharacter(combo.character)
  //
  // console.log(combo)

  if (!currentCharacter) return null
  if (!combo) return null

  return (
    <>
      <div className="container">
        <h1></h1>

        <h2>{currentCharacter.name}</h2>
        <img src={`/images/characters/character_${currentCharacter.id}_l.png`} />

        {combo.moves.map((move, idx) => (
          <div>
            <h3>{move.name}</h3>

            <div className="flex">
              {move.inputs.map((input) => (
                <div className="flex">
                  {input.prefix}
                  <img className="w-10" src={`/images/icons/${input.image}.png`} />
                  {input.suffix}
                </div>
              ))}
            </div>
          </div>
        ))}



        <div className='my-6'>
          <div className='md:w-1/2'>
            <h2>Combo</h2>
            <pre>{JSON.stringify(combo, null, 2)}</pre>
          </div>

          <div className='md:w-1/2'>
            <h2>Base64 encoded</h2>
            <pre>{base64EncodeJson(JSON.stringify(combo))}</pre>
          </div>

        </div>
      </div>
    </>
  )
}
*/

export default App
