import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from "@mui/material"
//  Typography es el que utilizas cuando quieres imprimir algo de texto
// Card es una forma en la que puedes colocar una imagen en la parte superior y después algo de contenido (como en Bootstrap)
// CardMedia es específicamente la imagen

const Noticia = ({noticia}) => {
    // console.log(noticia)
    
    const {urlToImage, url, title, description, source} = noticia
  return (
    <>
    {urlToImage && (
        <Grid item md={6} lg={4}> {/* El item es el hijo de aquel container (en Grid de ListadoNoticias.jsx) */}
            <Card>
                <CardMedia
                    component="img"
                    alt={`Imagen de la noticia ${title}`}
                    image={urlToImage}
                    height={'250'} // 250px
                />

                <CardContent>
                    <Typography variant="body1" color="error">
                        {source.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Link
                        href={url}
                        target="_blank"
                        variant="button"
                        width={"100%"}
                        textAlign={"center"}
                        sx={{
                            textDecoration: 'none'
                        }}
                    >
                        Leer Noticia
                    </Link>
                </CardActions>
            </Card>
        </Grid>

    )}
    
    </>
  )
}

export default Noticia
