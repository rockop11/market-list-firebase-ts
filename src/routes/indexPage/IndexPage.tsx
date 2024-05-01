import { Link } from "react-router-dom"
import { Box, Button, Grid } from "@mui/material"

export const IndexPage = () => {
	return (
		<Box >
			<Grid
				container
				justifyContent='center'
				rowSpacing={2}
				columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
			>
				<Grid item xs={6}>
					<Button variant="outlined" color="primary" sx={{ width: '100%' }}>
						<Link to="/create" style={{ color: 'inherit', textDecoration: 'none' }}>Crear Lista</Link>

					</Button>
				</Grid>

				<Grid item xs={6}>
					<Button variant="outlined" color="primary" sx={{ width: '100%' }}>
						<Link to="/profile" style={{ color: 'inherit', textDecoration: 'none' }}>Ir al Perfil</Link>
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
}
