import React from "react"
import {graphql, navigate} from "gatsby"
import Img from "gatsby-image"
import styles from "./index.module.css"

export default function Home({data}) {
  console.log(data)
  const background = data.allStrapiImage.edges[0].node.file.publicURL
  const borderImage = data.allStrapiImage.edges[1].node.file.publicURL

  const AnimTransition = (event) => {

    const body = document.querySelector('body')
    const textHome = document.querySelector(`.${styles.textHome}`)
    const titre = document.querySelector(`.${styles.titre}`)
    let titreclone = document.querySelector(`.${styles.clone}`)


    body.classList.toggle(styles.anime)

    setTimeout(() => {
      navigate("/infos/")
    }, 1000)


  }

  return (
    <div className={styles.background} style={{backgroundImage: `url(${background})`}}>
      <div
        className={styles.border}
        style={{backgroundImage: `url(${borderImage})`}}
        onClick={AnimTransition}
      >

        <div className={styles.textHome}>

          <h1 className={styles.titre}>
            Martin+Angela Ott<br/>
            Montmirail 2<br/>
            CH-2075 Thielle
          </h1>
          <div className={styles.contact}>
            <div className={styles.topText}>PRODUITS DE LA FERME DE MONTMIRAIL<br/></div>
            <div className={styles.bottomText}>VENTE DIRECTE SUR RENDEZ-VOUS 079 692 15 18</div>
          </div>

        </div>

        <div className={styles.diaporama}>
        </div>

      </div>
    </div>
  );
}

export const query = graphql`
    query
    {
        allStrapiImage(filter: {accueil: {ne: "non"}}) {
            edges {
                node {
                    id
                    file {
                        publicURL
                    }
                    accueil
                }
            }
        }
    }
`