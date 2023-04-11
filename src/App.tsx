import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <Grid templateAreas={{
        md: `"nav nav" "aside main"`,
        base: `"nav" "main"`
      }}
      >
        <GridItem area={"nav"} bg={"coral"}>
          Nav
        </GridItem>
        <Show above='md'>
          <GridItem area={"aside"} bg={"red"}>
            Aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"blue"}>
          Main
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
