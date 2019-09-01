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
    34: [
        {dayNum:19,dayWeek:'Mon'},
        {dayNum:20,dayWeek:'Tue'},
        {dayNum:21,dayWeek:'Wed'},
        {dayNum:22,dayWeek:'Thu'},
        {dayNum:23,dayWeek:'Fri'},
        {dayNum:24,dayWeek:'Sat'},
        {dayNum:25,dayWeek:'Sun'}
        ],
    35: [
        {dayNum:26,dayWeek:'Mon'},
        {dayNum:27,dayWeek:'Tue'},
        {dayNum:28,dayWeek:'Wed'},
        {dayNum:29,dayWeek:'Thu'},
        {dayNum:30,dayWeek:'Fri'},
        {dayNum:31,dayWeek:'Sat'},
        {dayNum:1,dayWeek:'Sun'}
        ],
    36: [
        {dayNum:2,dayWeek:'Mon'},
        {dayNum:3,dayWeek:'Tue'},
        {dayNum:4,dayWeek:'Wed'},
        {dayNum:5,dayWeek:'Thu'},
        {dayNum:6,dayWeek:'Fri'},
        {dayNum:7,dayWeek:'Sat'},
        {dayNum:8,dayWeek:'Sun'}
        ],
    37: [
        {dayNum:9,dayWeek:'Mon'},
        {dayNum:10,dayWeek:'Tue'},
        {dayNum:11,dayWeek:'Wed'},
        {dayNum:12,dayWeek:'Thu'},
        {dayNum:13,dayWeek:'Fri'},
        {dayNum:14,dayWeek:'Sat'},
        {dayNum:15,dayWeek:'Sun'}
    ],
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