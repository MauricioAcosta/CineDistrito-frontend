export interface Peliculas_Fecha{
    date:string;
    movies:Pelicula[];
    
}

export interface Pelicula{
    title:String;
    trailer_url:String;
    graphic_url:String;
    runtime:String;
    rating:String;
    film_HO_code:String;
    corporate_film_id:String;
    synopsis:String;
    opening_date:String;
}
