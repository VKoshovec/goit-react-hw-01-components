import PropTypes from 'prop-types';

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

const Statistics = ( { title, stats, grouped } ) => {
    return (
      <section class="statistics">
        {title && <h2 class="title">{title}</h2>} 
          <ul class="stat-list">
            { grouped ?
              groupArr(stats).map(stat => (
                <li key={stat.id} class="item">
                   <span class="label">{stat.label}</span>
                   <span class="percentage">{stat.percentage}</span>
                </li>
              ))
              :
              stats.map(stat => (
                <li key={stat.id} class="item">
                   <span class="label">{stat.label}</span>
                   <span class="percentage">{stat.percentage}</span>
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