import React from "react"
import {graphql, navigate} from "gatsby"
import styles from "./index.module.css"
import anime from 'animejs/lib/anime.es.js'

export default function Home({data}) {
  const background = data.allStrapiImage.edges[0].node.file.publicURL
  const borderImage = data.allFile.edges[0].node.publicURL

  const getAnime = (exit, node) => {

  }

  const sayHello = (e) => {

    console.log(e)

    anime({
      targets: `.${styles.border}`,
      width: '100%',
      height: '100%',
      duration: 1000,
      easing: 'linear'
    })
    anime({
      targets: `.${styles.textHome}`,
      width:'100%',
      height:'100%',
      margin: '30px',
      duration: 1000,
      easing: 'linear'
    })

    anime({
      targets:`h1`,
      opacity:0,
      duration:1000,
      easing:'linear'
    })

    setTimeout(()=>{navigate("/infos/")}, 1200)


  }

  return (
    <div className={styles.background} style={{backgroundImage: `url(${background})`}}>
      <div
        className={styles.border}
        style={{backgroundImage: `url(${borderImage})`}}
        onClick={sayHello}
      >
        <div className={styles.textHome}>
          <h1>
            Martin+Angela Ott<br/>
            Montmirail 2<br/>
            CH-2075 Thielle
          </h1>
          <p>
            PRODUITS DE LA FERME DE MONTMIRAIL<br/>
            VENTE DIRECTE SUR RENDEZ-VOUS 079 692 15 18
          </p>
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
    query{
        allStrapiImage {
            edges {
                node {
                    id
                    file {
                        id
                        publicURL
                    }
                    category
                }
            }
        },
        allFile(filter: {sourceInstanceName: {eq: "images"}, name: {eq: "darktheme"}}) {
            edges {
                node {
                    id
                    publicURL
                }
            }
        }
    }
`