import React from "react"
import {graphql} from "gatsby";
import styles from './infos.module.css'

export default function Infos({data}) {

  const borderImage = data.allFile.edges[0].node.publicURL
  const sectionsTextContent = data.allStrapiSection.nodes

  const scrollToText = (e) => {
    e.preventDefault()
    const sectionTo = document.getElementsByClassName(e.target.className)
  }

  return (
    <div className={styles.border} style={{backgroundImage: `url(${borderImage})`}}>
      <div className={styles.content}>
        <div className={styles.textContent}>

          <header>PRODUITS DE LA FERME DE MONTMIRAIL</header>

          <nav>
            <ul>
              {sectionsTextContent.map((section) =>(
                <li key={section.id} className={section.id} onClick={scrollToText}>
                  {section.nom}
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.description}>
          {sectionsTextContent.map((section)=>(
            <section key={section.id} className={section.id}>
              {section.description}
            </section>
          ))}
          </div>


          <footer>VENTE DIRECTE SUR RENDEZ-VOUS 079 692 15 18</footer>

        </div>

        <div className={styles.diaporama}>
          <img src={'https://cdn.pixabay.com/photo/2020/09/15/07/45/pine-forest-5572944_960_720.jpg'} alt={"photo"}/>
          <img src={'https://cdn.pixabay.com/photo/2014/09/07/22/17/forest-438432_960_720.jpg'} alt={"photo"}/>
          <img src={'https://cdn.pixabay.com/photo/2013/07/25/01/31/sunlight-166733_960_720.jpg'} alt={"photo"}/>
        </div>

      </div>
    </div>
  )
}

export const background = graphql`
    query{
        allFile(filter: {sourceInstanceName: {eq: "images"}, name: {eq: "darktheme"}}) {
            edges {
                node {
                    id
                    publicURL
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