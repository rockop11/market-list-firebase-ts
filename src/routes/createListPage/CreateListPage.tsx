import { Box, Grid } from "@mui/material"
import { CreateListForm, ProductList } from "../../components"

export const CreateListPage = () => {

    return (
        <Box>
            <Grid container spacing={2}>

                <Grid item>
                    <CreateListForm />
                </Grid>

                <Grid item xs={12}>
                    <ProductList />
                </Grid>

            </Grid>
        </Box>
    )
}
