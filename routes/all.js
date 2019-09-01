const express = require('express');
const router = express.Router();
const stories = require('../stories');
const axios = require('axios');


const makeCalendar = (dayOfWeek, dayOfMonth) => {
    let calendar = [];
    calendar[dayOfWeek] = dayOfMonth;

    for(var i = dayOfWeek-1; i>=1; i--) {
        calendar[i] = dayOfMonth-(dayOfWeek-i);
    }
    for(var i = dayOfWeek+1; i<=7; i++) {
        calendar[i] = dayOfMonth > 31 ? i: dayOfMonth+(i-dayOfWeek);
        console.log( calendar[i] );
    }
	calendar.shift();
    return calendar;
}
const calendar = {
    34: [19,20,21,22,23,24,25],
    35: [26,27,28,29,30,31,1],
    36: [2,3,4,5,6,7,8],
    37: [9,10,11,12,13,14,15],
}

router.get('/', (req, res) => {
    res.status(200).send("done")
});

router.post('/story-of-day', async (req, res) => {

    const timeRequest = await axios.get('http://worldtimeapi.org/api/timezone/Africa/Lagos.json')
    .then((response) => response)
    .catch((error) => {
        console.log('error', error)
    })
    .then((response) => response);

    res.status(200).send({
        calendar: calendar[timeRequest.data.week_number],
        dayOfWeek: timeRequest.data.day_of_week,
        dayOfMonth: new Date(timeRequest.data.utc_datetime).getDate(),
        currentDay: timeRequest.data.day_of_week,
        story: stories[timeRequest.data.day_of_week]
    });
});


module.exports = router;