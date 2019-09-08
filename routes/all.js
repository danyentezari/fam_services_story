const express = require('express');
const router = express.Router();
const stories = require('../stories');
const axios = require('axios');

const capitals = {
	'Nigeria': 'Lagos',
	'Ghana': 'Accra',
	'Algeria': 'Algiers',
	'Guinea-Bissau': 'Bissau',
	'Egypt': 'Cairo',
	'Morocco': 'Casablanca',
	'South Africa': 'Johannesburg',
	'South Sudan': 'Juba',
	'Sudan': 'Khartoum',
	'Mozambique': 'Maputo',
	'Liberia': 'Monrovia',
	'Kenya': 'Nairobi',
	'Chad': 'Ndjamena',
	'São Tomé and Príncipe': 'Sao_Tome',
	'Libya': 'Tripoli',
	'Tunisia': 'Tunis',
	'Namibia': 'Windhoek'
}
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

    let timeRequest = await axios.get('http://worldtimeapi.org/api/timezone/Africa/Lagos.json')
    .then((response) => response)
    .catch((error) => {
        console.log('error', error)
    })
    .then((response) => response);

    timeRequestX = { 
        data: {
            "week_number":35,
            "utc_offset":"+01:00",
            "utc_datetime":"2019-08-31T14:14:30.13988+00:00",
            "unixtime":1566310470,
            "timezone":"Africa/Lagos",
            "raw_offset":3600,
            "dst_until":null,
            "dst_offset":0,
            "dst_from":null,
            "dst":false,
            "day_of_year":232,
            "day_of_week":6,
            "datetime":"2019-08-31T14:14:30.13988+00:00",
            "client_ip":"92.97.90.58",
            "abbreviation":"WAT"
        }
    }

    res.status(200).send({
        calendar: calendar[timeRequest.data.week_number],
        dayOfWeek: timeRequest.data.day_of_week,
        dayOfMonth: new Date(timeRequest.data.utc_datetime).getDate(),
        currentDay: timeRequest.data.day_of_week,
        story: stories[timeRequest.data.day_of_week]
    });
});


module.exports = router;