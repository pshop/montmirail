import React from "react"
import {graphql} from "gatsby";
import styles from './infos.module.css'
import anime from 'animejs/lib/anime.es.js';
import Img from "gatsby-image"

export default function Infos({data}) {

  const sectionsTextContent = data.allStrapiSection.nodes

  const scrollToText = (e) => {

    let sectionTo = document.querySelector('section.' + e.target.className)
    let sectionTop = sectionTo.getClientRects()[0].top
    let navBottom = document.querySelector('nav').getClientRects()[0].bottom
    let description = document.querySelector('.description')
    let descriptionTop = description.scrollTop

    let scrollValue = sectionTop - navBottom + descriptionTop

    anime({
      targets: description,
      scrollTop: scrollValue,
      duration: 1000,
      easing: 'linear'
    })
  }

  const reverseScroll = (e) => {
    console.log("scroll")
    e.preventDefault()
  }

  return (
    // <div className={styles.border} style={{backgroundImage: `url(${borderImage})`}}>
    <div>
      <div className={styles.border}>
        <Img
          fluid={data.allStrapiImage.nodes[1].file.childImageSharp.fluid}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.textContent}>

          <header>PRODUITS DE LA FERME DE MONTMIRAIL</header>

          <nav className={styles.fadeIn}>
            <ul>
              {sectionsTextContent.map((section) => (
                <li key={section.id} className={section.id} onClick={scrollToText}>
                  {section.nom}
                </li>
              ))}
            </ul>
          </nav>

          <div className={`description ${styles.description}`} onScroll={reverseScroll}>
            {sectionsTextContent.map((section) => (
              <section key={section.id} className={ `${section.id}  ${styles.fadeIn}`}>
                {section.description}
              </section>
            ))}
          </div>


          <footer>VENTE DIRECTE SUR RENDEZ-VOUS 079 692 15 18</footer>

        </div>

        <div className={styles.diaporama}  onScroll={reverseScroll}>
          <Img
            className={styles.fadeIn}
            fluid={data.allStrapiImage.nodes[1].file.childImageSharp.fluid}
          />
          <Img
            className={styles.fadeIn}
            fluid={data.allStrapiImage.nodes[1].file.childImageSharp.fluid}
          />
          <Img
            className={styles.fadeIn}
            fluid={data.allStrapiImage.nodes[1].file.childImageSharp.fluid}
          />
        </div>

      </div>
    </div>
  )
}

export const background = graphql`
    query{
        allStrapiImage {
            nodes {
                file {
                    childImageSharp {
                        fluid(maxWidth:1920) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        },
        allStrapiSection (sort:{
            fields:[strapiId],
            order:ASC
        }) {
            nodes {
                description
                id
                nom
                strapiId
            }
        },
    }
`