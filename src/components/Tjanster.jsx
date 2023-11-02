import React, {useState} from 'react';
import '../style/Services.css';

import {motion} from 'framer-motion'
import mountain1 from '../components/images/mountain1.png'
import mountain2 from '../components/images/mountain2.png'
import mountain3 from '../components/images/mountain3.png'
import mountain4 from '../components/images/mountain4.png'
import mountain5 from '../components/images/mountain5.png'
import mountain6 from '../components/images/mountain6.png'
import mountain7 from '../components/images/mountain7.png'
import mountain8 from '../components/images/mountain8.png'
import snowby from '../components/images/snowby.png'
import snowby2 from '../components/images/snowby2.png'
import snowfjäll from '../components/images/snowfjäll.png'
import snöhus from '../components/images/snöhus.jpg'

const Services = () => {

    const [expandedIndex, setExpandedIndex] = useState(null)

    const handleCardClick = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }

    const cardVariants = {
        expanded: {
            width: '400px'
        },
        collapsed: {
            width: '200px'
        }
    }

    const cardImages = [mountain1, mountain4,mountain2, mountain5, snowfjäll, snowby2, snöhus]

    const cardDescriptions = [
        'This is a description, write whatever you need here, tis is just text for a test',
        'This is a description, write whatever you need here, tis is just text for a test',
        'This is a description, write whatever you need here, tis is just text for a test',
        'This is a description, write whatever you need here, tis is just text for a test',
        'This is a description, write whatever you need here, tis is just text for a test',
        'This is a description, write whatever you need here, tis is just text for a test',
        'This is a description, write whatever you need here, tis is just text for a test',
    ]

    return (
        <section className="featured-projects">
        <div className="max-container">
          <h1 className="section-title">Featured Projects</h1>
          <p className="section-subtitle">Check out our latest works</p>
        </div>
        <div className="project-cards">
          {[0, 1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div
              key={index}
              className={`project-card ${index === expandedIndex ? 'expanded' : ''}`}
              variants={cardVariants}
              initial="collapsed"
              animate={index === expandedIndex ? 'expanded' : 'collapsed'}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              style={{
                backgroundImage: `url(${cardImages[index]})`,
              }}
            >
              <div className="card-content">
                <div className="card-footer">
                  <h2 className="card-title">Card {index + 1}</h2>
                  {index === expandedIndex && (
                    <p className="card-description">{cardDescriptions[index]}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    )

}

export default Services