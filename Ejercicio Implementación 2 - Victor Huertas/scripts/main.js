import { Apicacion } from "./aplicacion.js";
import { Audiencia } from "./audiencia.js";
import { Canal } from "./canal.js";
import { Categoria } from "./categoria.js";
import { Empresa } from "./empresa.js";
import { Plataforma } from "./plataforma.js";
import { RedSocial } from "./redSocial.js";
import { Stream } from "./stream.js";
import { Streamer } from "./streamer.js";
let aplicacion = new Apicacion();
// Objetos genericos
let objPlataforma = new Plataforma("", "", "");
let objCanal = new Canal("", "", "");
let objStreamer = new Streamer("", "");
let objStream = new Stream("");
let objAudiencia = new Audiencia("");
let objRedSocial = new RedSocial("", "");
let objCategoria = new Categoria("", "", "");
let objEmpresa = new Empresa("");
// Imprementacion creacion de Plataforma
objPlataforma.nombre = "Twitch";
objPlataforma.logo = "https://imborrable.com/wp-content/uploads/2022/10/twitch-logo-2019.png";
objPlataforma.descripcion = "Twitch es una plataforma estadounidense perteneciente a la empresa Amazon, Inc., que permite realizar transmisiones en vivo. Esta plataforma tiene como función principal la retransmisión de videojuegos en directo, un campo en el que tiene como competidor a YouTube.";
objEmpresa.nombre = "Amazon, Inc.";
objPlataforma.agregarPatrocinador(objEmpresa);
// Metodo Agregar una plataforma
aplicacion.agregarPlataforma(objPlataforma);
objPlataforma.nombre = "Youtube";
objPlataforma.logo = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png";
objPlataforma.descripcion = "YouTube es un sitio web de origen estadounidense dedicado a compartir videos. Presenta una variedad de clips de películas, programas de televisión y vídeos musicales, así como contenidos amateur como videoblogs y YouTube Gaming.";
objEmpresa.nombre = "Alphabet Inc";
objPlataforma.agregarPatrocinador(objEmpresa);
aplicacion.agregarPlataforma(objPlataforma);
objPlataforma.nombre = "Facebook";
objPlataforma.logo = "data:image/png;base64,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";
objPlataforma.descripcion = "Facebook es un servicio de redes y medios sociales en línea estadounidense con sede en Menlo Park, California.";
objEmpresa.nombre = "Meta Platforms";
objPlataforma.agregarPatrocinador(objEmpresa);
aplicacion.agregarPlataforma(objPlataforma);
// Mostrar listado de plataformas
console.log("Lista de plataformas:");
aplicacion.mostrarListadoPlataformas();
// Mostrar detalle de plataforma
console.log("\nDetalle de plataformas:");
aplicacion.plataformas[0].mostrarDetallePlataforma();
aplicacion.plataformas[1].mostrarDetallePlataforma();
aplicacion.plataformas[2].mostrarDetallePlataforma();
// Metodo Agregar una canal
objCanal.nombre = "Raúl Álvarez Genes";
objCanal.banner = "https://static-cdn.jtvnw.net/jtv_user_pictures/9a03de9c-4deb-4cfb-bbe0-7cbef3b6ff8b-profile_banner-480.png";
objCanal.descripcion = "Nací en el 87 y me gusta jugar a videojuegos.";
aplicacion.plataformas[0].agregarCanal(objCanal);
objCanal.nombre = "Ibai Llanos Garatea";
objCanal.banner = "https://static-cdn.jtvnw.net/jtv_user_pictures/8accbf28-7036-49df-aea6-810fc53959d5-profile_banner-480.png";
objCanal.descripcion = "Si lees esto que sepas que te aprecio";
aplicacion.plataformas[0].agregarCanal(objCanal);
objCanal.nombre = "Rubén Doblas Gundersen";
objCanal.banner = "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/MJOH6I5HCRHGJMDFPX6MIKEMDM";
objCanal.descripcion = "Bienvenidos a mi canal! Esto es una descripción. Y en la descripción se supone que tengo que poner algo sobre lo que trata mi canal...";
aplicacion.plataformas[0].agregarCanal(objCanal);
objCanal.nombre = "Rubén Doblas Gundersen";
objCanal.banner = "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/MJOH6I5HCRHGJMDFPX6MIKEMDM";
objCanal.descripcion = "Bienvenidos a mi canal! Esto es una descripción. Y en la descripción se supone que tengo que poner algo sobre lo que trata mi canal...";
aplicacion.plataformas[1].agregarCanal(objCanal);
objCanal.nombre = "Elizabeth Maria Erigolla";
objCanal.banner = "https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/305969034_631401871973082_4922752438103706872_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=etDoW1WbP-8AX977eBD&_nc_ht=scontent.fbog4-2.fna&oh=00_AfDdYJy4pqUUTAj_nYzymFKQ83hTcFyu5rIqOx4JbW4BgQ&oe=6480F2C4";
objCanal.descripcion = "♥ Twitch Partner. ♥ Adoro hacer reir a los demas. ♥ No tengo segunda cuenta ♥ Tengo 23 años";
aplicacion.plataformas[2].agregarCanal(objCanal);
// Mostrar lista de canales
console.log("\nLista de canales:");
aplicacion.plataformas[0].mostrarListadoCanales();
aplicacion.plataformas[1].mostrarListadoCanales();
aplicacion.plataformas[2].mostrarListadoCanales();
// Mostrar detalle de canal
console.log("\nDetalle de canales que hay en twitch:");
aplicacion.plataformas[0].canales[0].mostrarDetalleCanal();
aplicacion.plataformas[0].canales[1].mostrarDetalleCanal();
aplicacion.plataformas[0].canales[2].mostrarDetalleCanal();
// Metodo Agregar un streamer
objStreamer.nickname = "auronplay";
objStreamer.descripcion = "Raúl Álvarez Genes, más conocido como AuronPlay o simplemente Auron, es un YouTuber, streamer de Twitch y comediante español.";
aplicacion.plataformas[0].canales[0].agregarStreamer(objStreamer);
objStreamer.nickname = "ibai";
objStreamer.descripcion = "Ibai Llanos Garatea es un streamer, youtuber y presentador de deportes electrónicos español.​​En Twitch cuenta con más de 11 millones de seguidores, lo que le coloca en el cuarto puesto global de los canales con más seguidores de la plataforma.​";
aplicacion.plataformas[0].canales[1].agregarStreamer(objStreamer);
objStreamer.nickname = "elrubiusOMG";
objStreamer.descripcion = "Rubén Doblas Gundersen, mejor conocido como el Rubius, es un youtuber, streamer y celebridad de internet hispano-noruego, ​reconocido por sus vídeos de entretenimiento basados en gameplays, sketches, parodias, montajes y videoblogs.";
aplicacion.plataformas[0].canales[2].agregarStreamer(objStreamer);
aplicacion.plataformas[1].canales[0].agregarStreamer(objStreamer);
objStreamer.nickname = "Staryuuki";
objStreamer.descripcion = "Elizabeth María Erigolla, más conocida como Staryuuki o simplemente Yuuki, es una youtuber y streamer cubana, conocida por tener un contenido variado, principalmente de gameplays.";
aplicacion.plataformas[2].canales[0].agregarStreamer(objStreamer);
// Metodo agregar stream
objStream.tema = "Estoy jugando";
objCategoria.nombre = "Among Us";
objCategoria.descripcion = "Among Us​ es un videojuego de género party y multijugador en línea desarrollado por la compañía estadounidense Innersloth y distribuido entre junio y noviembre de 2018 para las plataformas Android, iOS y Windows.";
objCategoria.imagen = "https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec";
// Agregar categoria a Stream
objStream.agrearCategoria(objCategoria);
aplicacion.plataformas[0].canales[0].agregarStream(objStream);
// Agregar audiencia a Stream
objAudiencia.nickname = "wivictor21";
aplicacion.plataformas[0].canales[0].streams[0].agregarAudiencia(objAudiencia);
objAudiencia.nickname = "deyvin";
aplicacion.plataformas[0].canales[0].streams[0].agregarAudiencia(objAudiencia);
objAudiencia.nickname = "camila23";
aplicacion.plataformas[0].canales[0].streams[0].agregarAudiencia(objAudiencia);
objAudiencia.nickname = "liucard2356";
aplicacion.plataformas[0].canales[0].streams[0].agregarAudiencia(objAudiencia);
// Agregar canales a Streamer
objCanal.nombre = aplicacion.plataformas[0].canales[0].nombre;
objCanal.banner = aplicacion.plataformas[0].canales[0].banner;
objCanal.descripcion = aplicacion.plataformas[0].canales[0].descripcion;
aplicacion.plataformas[0].canales[0].streamers[0].agregarCanalAStreamer(objCanal);
objCanal.nombre = aplicacion.plataformas[0].canales[1].nombre;
objCanal.banner = aplicacion.plataformas[0].canales[1].banner;
objCanal.descripcion = aplicacion.plataformas[0].canales[1].descripcion;
aplicacion.plataformas[0].canales[1].streamers[0].agregarCanalAStreamer(objCanal);
objCanal.nombre = aplicacion.plataformas[0].canales[2].nombre;
objCanal.banner = aplicacion.plataformas[0].canales[2].banner;
objCanal.descripcion = aplicacion.plataformas[0].canales[2].descripcion;
aplicacion.plataformas[0].canales[2].streamers[0].agregarCanalAStreamer(objCanal);
objCanal.nombre = aplicacion.plataformas[1].canales[0].nombre;
objCanal.banner = aplicacion.plataformas[1].canales[0].banner;
objCanal.descripcion = aplicacion.plataformas[1].canales[0].descripcion;
aplicacion.plataformas[1].canales[0].streamers[0].agregarCanalAStreamer(objCanal);
objCanal.nombre = aplicacion.plataformas[2].canales[0].nombre;
objCanal.banner = aplicacion.plataformas[2].canales[0].banner;
objCanal.descripcion = aplicacion.plataformas[2].canales[0].descripcion;
aplicacion.plataformas[2].canales[0].streamers[0].agregarCanalAStreamer(objCanal);
// Agregar stream a streamer
objStreamer.agregarStreamAStrimer(aplicacion.plataformas[0].canales[0].streams[0]);
aplicacion.plataformas[0].canales[0].streamers[0].agregarStreamAStrimer(objStream);
// Ver detalle de Streamer
console.log("\n\nDetalle de Streamer\n");
aplicacion.plataformas[0].canales[0].streamers[0].verDetalleStreamer();
aplicacion.plataformas[0].canales[1].streamers[0].verDetalleStreamer();
aplicacion.plataformas[0].canales[2].streamers[0].verDetalleStreamer();
aplicacion.plataformas[2].canales[0].streamers[0].verDetalleStreamer();
// Mostrar detalle de stream
console.log("\n\nMostrar detalle stream:\n");
aplicacion.plataformas[0].canales[0].streams[0].mostrarDetalleStream();
console.log("\n\nObjeto Aplicacion:");
console.log(aplicacion);
