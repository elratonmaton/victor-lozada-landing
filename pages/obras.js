import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import '../styles/style.sass'

const Obras = () => (
  <div>
    <Head>
      <title>Victor M. Lozada A.</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>    

    <Nav />

    <div className="container obras">
      <div className="row">
        <div className="col s12">
          <h1 className="title">OBRAS</h1>
        </div>
        <div className="col s12 books-container">

          <div className="row book-item">
            <div className="col s4 image">
              <img src="/images/libro1.jpg" draggable="false"></img>
              <p><b>El sueño de Cerbero</b><br></br>Publicada 2018</p>
            </div>
            <div className="col s8 description">
              <p>La historia se basa en la Ciudad de México: comienza
                con un asesinato, al capturar a quien lo cometió, él
                indica que lo hizo porque un “ente” lo acechaba y no lo
                iba a dejar tranquilo hasta que matara a su enamorada.
                La policía lo considera como a una persona que perdió
                el juicio. Un par de meses después, una niña de 16 años
                asesina a su padrastro. Al encontrar su diario, la
                policía descubre que ella estaba siendo acosada por el
                mismo “ente” del primer caso. Durante todo esto, Diego,
                el personaje principal, estudiante de psicología de la
                UNAM, comienza a presenciar encuentros extraños con el
                acosador de los primeros dos crímenes: un hombre todo
                vestido de negro que siempre aparece con tres perros
                encadenados. ¿Se descubría quién o qué es el hombre de
                los tres perros? ¿Diego tendrá el mismo destino que las
                primeras dos víctimas y se convertirá en un asesino?</p>
            </div>
          </div>
          
          <div className="row book-item">
            <div className="col s4 image">
              <img src="/images/libro2.jpg" draggable="false"></img>
              <p><b>Bellavista</b><br></br>Sin publicar</p>
            </div>
            <div className="col s8 description">
              <p>¿Qué te llevaría a tomar la decisión de matarte? ¿Miedo?
                ¿Soledad? En el caso de Miguel fue la muerte de sus
                padres. La fecha elegida sería un día antes de su
                cumpleaños y el lugar un pequeño pueblo en la cosas
                peruana llamado Bellavista. Es ahí donde tuvo que
                viajar después de la tragedia por consejo del mejor
                amigo de su padre para que él pueda estar con el único
                miembro de su familia aún con vida, su tía abuela Elena.
                Es en Bellavista donde comienza a cuestionarse varios
                aspectos de su vida, incluso su propia existencia.
                Miguel encontrará respuestas, pero aún más preguntas,
                hasta que el momento llegue de cumplir con su objetivo:
                morir. </p>
            </div>
          </div>
          
          <div className="row book-item">
            <div className="col s4 image">
              <img src="/images/libro2.jpg" draggable="false"></img>
              <p><b>Discerpo</b><br></br>Sin publicar</p>
            </div>
            <div className="col s8 description">
              <p>Poco a poco, durante un lapso de siete meses, toda
                persona en el mundo pierde la capacidad de tener
                emociones y sentimientos. El personaje principal, quien
                ya ha perdido esa capacidad, intenta relatar todo lo que
                ha vivido desde el inicio de esa transformación; una
                transformación que modifica su forma de verse a sí
                mismo, de analizar a la naturaleza humana, de entender
                qué es la moral, como si su existencia fuese un ratón de
                lavatorio separado de él. Esta separación provocará que
                termine topándose con grupos de personas que miran al
                nuevo “estado” de la humanidad como una mejoría y que
                buscan eliminar a cualquiera que piense diferente a
                ellos.</p>
            </div>
          </div>
          
          <div className="row book-item">
            <div className="col s4 image">
              <img src="/images/libro2.jpg" draggable="false"></img>
              <p><b>El ultimo nómada</b><br></br>Sin publicar</p>
            </div>
            <div className="col s8 description">
              <p>Hugo no puede estar seguro si sus “recuerdos” son
                realmente suyos, ya que por un trastorno
                psicológico, su mente, al escuchar historias de
                otras personas, las absorbe y las hace suyas, por
                lo que constantemente tiene que estar apuntando en
                un blog de notas sus vivencias para poder
                asegurarse de que su mente no se llene de mentiras.
                Este blog desaparece durante un viaje por el
                Sureste Asiático, lo que le empuja a dudar sobre si
                lo que recuerda como los primeros días de viaje sea
                verdadero, incluyendo la idea de que había conocido
                a la mujer de sus sueños en Bali.</p>
            </div>
          </div>
          
          <div className="row book-item">
            <div className="col s4 image">
              <img src="/images/libro2.jpg" draggable="false"></img>
              <p><b>Sí, quédense</b><br></br>Sin publicar</p>
            </div>
            <div className="col s8 description">
              <p>Libro de relatos inspirados en Arequipa. Se puede
                encontrar historias inspiradas desde la batalla de
                Castilla contra Vivanco hasta el almuerzo familiar
                de una mujer de 36 años quien es criticada
                constantemente por su soltería, pasando por una
                breve auto-biografía del autor.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <Footer />

  </div>
)

export default Obras
