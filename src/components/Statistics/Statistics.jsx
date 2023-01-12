import PropTypes from 'prop-types';
import css from './statistics.module.css';

function groupArr (arr) { 
  return arr.reduce((acc, element)=> {
    if (!acc.map((el)=>el.label).includes(element.label)) 
      { 
        acc.push(element)
      } 
    else  
      { 
        const accRecIndex = acc.findIndex (el=>el.label === element.label);
        const accRecPercentage = acc[accRecIndex].percentage;
        const accRecId = acc[accRecIndex].id;
        
        const accNewRec = { 
          "id": accRecId,
          "label": element.label,
          "percentage": accRecPercentage + element.percentage,
        }

        acc.splice( accRecIndex, 1, accNewRec); 
      }
    return acc;
  }, []
)};

function randomColor () {
  
  const bgcolor = "#"+(Math.round(999999 - 99999 * Math.random()) );
  console.log(bgcolor)
  return {
    backgroundColor: bgcolor,
  }
}



const Statistics = ( { title, stats, grouped } ) => {
    return (
      <section className= { css.statistics }>
        {title && <h2 className={ css.title }>{title}</h2>} 
          <ul className={ css.statList }>
            { grouped ?
              groupArr(stats).map(stat => (
                <li key={stat.id} className={ css.item } style={ randomColor() }>
                   <span className={ css.label }>{stat.label}</span>
                   <span className={ css.percentage }>{stat.percentage + "%"}</span>
                </li>
              ))
              :
              stats.map(stat => (
                <li key={stat.id} className={ css.item } style={ randomColor() }>
                   <span className={ css.label }>{stat.label}</span>
                   <span className={ css.percentage }>{ stat.percentage + "%" }</span>
                </li>
              ))
            }    
          </ul>
      </section>
)
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }),
    ),
    grouped: PropTypes.bool,
};

export default Statistics;