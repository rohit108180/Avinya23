import React from 'react'

function Timelinecomp({ items, timeline }) {
    const timelinele = (timeline % 2 == 0) ?
        (<div class="timeline-event-left">
            <div className="timeline-circle"> {items.id} </div>
            <h1 class="heading-timeline">{items.name}</h1>
            <p class="info-timeline">{items.date}</p>
        </div>) :
        (<div class="timeline-event-right">
            <div className="timeline-circle-right"> {items.id} </div>
            <h1 class="heading-timeline-right">{items.name}</h1>
            <p class="info-timeline-right">{items.date}</p>
        </div>)

    const stick = (timeline != 0) ? ((timeline % 2 == 0) ? (<div class="white-stick-right"> </div>) : (<div class="white-stick-left"></div>)) : (<div></div>)
    return (
        <div>
            {stick}
            {timelinele}
        </div>
    )
}

export default Timelinecomp