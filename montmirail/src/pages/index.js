import React from "react"
import {graphql} from "gatsby";
import styles from "./index.module.css"


export default function Home({data}) {
    const background = data.allStrapiImage.edges[0].node.file.publicURL
    const borderImage = data.allFile.edges[0].node.publicURL
    return (
        <div className={styles.background} style={{backgroundImage: `url(${background})`}}>
            <div className={styles.border} style={{backgroundImage:`url(${borderImage})`}}>
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