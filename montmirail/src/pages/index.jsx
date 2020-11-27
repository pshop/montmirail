import React from "react"
import {graphql, navigate} from "gatsby"
import Img from "gatsby-image"
import styles from "./index.module.css"

export default function Home({data}) {

  const AnimTransition = (event) => {

    const body = document.querySelector('body')

    body.classList.toggle(styles.anime)

    //setTimeout(() => {navigate("/infos/")}, 1000)
  }
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.querySelector(`.${styles.background}`).classList.add(styles.resizeAnimationStopper)
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.querySelector(`.${styles.background}`).classList.remove(styles.resizeAnimationStopper);
    }, 400);
  });
  return (
    <div>
      <Img
        fluid={data.allStrapiImage.nodes[0].file.childImageSharp.fluid}
        className={styles.background}
      />
      <div className={styles.border}>

        <Img
          fixed={data.allStrapiImage.nodes[1].file.childImageSharp.fixed}
          onClick={AnimTransition}
        />
      </div>
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
  )
    ;
}

export const query = graphql`
    query
    {
        allStrapiImage {
            nodes {
                file {
                    childImageSharp {
                        fluid(maxWidth:1920) {
                            ...GatsbyImageSharpFluid
                        }
                        fixed(width:750){
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
`
