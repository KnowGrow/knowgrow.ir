import React from "react"
import Grid from 'styled-components-grid';
const PageTwo = () => {
    return (
        <Grid>
            <Grid.Unit size={1 / 6}>Awesome!</Grid.Unit>
            <Grid.Unit size={1 / 3}>Amazing!</Grid.Unit>
            <Grid.Unit size={{ tablet: 1 / 2, desktop: 1 / 4 }}>Out of this world!</Grid.Unit>
        </Grid>
        
    )
}
export default PageTwo


