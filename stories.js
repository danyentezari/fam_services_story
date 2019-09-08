const description = "Dr. Stella Okoli a Nigerian pharmacist and entrepreneur has defied the odds in a predominantly male centric business space by building one of Nigeria’s leading indigenous pharmaceutical companies. She is the founder and current C.E.O of Emzor Pharmaceutical which she founded 3 decades ago, with footprints in India, Sierra Leone, Liberia, Ghana and Mali. Dr. Stella Okoli is a woman with a difference who has distinguished herself as a true daughter of Africa.";

const stories = [
    {
        person: 'Dr Stella Chinyelu Okoli',
        occupation: 'Pharmacist & Entrepreneur',
        title: `Entreprenuership and Manufacturing`,
        storyID: `0001`,
        description: description,
        questions: [
            { 
                title: 'What aspects of this story touches and inspires you and why?'
            },
            { 
                title: 'What personal or societal factors could have prevented this icon from pursuing and achieving her dreams?'
            },
            { 
                title: 'What personal qualities helped her overcome her challenges and achieve greatness?'
            },
            {
                title: 'In what ways or areas has this story changed how you think about your self and your future?'
            },
            {
                title: 'What practical action steps are you going to take, based on what you learnt from this story?'
            }
        ]
    }
]

for(let i = 1; i<31; i++) {
    stories.push({
        person: `Dr Stella Chinyelu Okoli`,
        occupation: `Pharmacist & Entrepreneur`,
        title: `Entreprenuership and Manufacturing`,
        storyID: `000${i}`,
        description: description,
        questions: [
            { 
                title: 'What aspects of this story touches and inspires you and why?'
            },
            { 
                title: 'What personal or societal factors could have prevented this icon from pursuing and achieving her dreams?'
            },
            { 
                title: 'What personal qualities helped her overcome her challenges and achieve greatness?'
            },
            {
                title: 'In what ways or areas has this story changed how you think about your self and your future?'
            },
            {
                title: 'What practical action steps are you going to take, based on what you learnt from this story?'
            }
        ]
    });
}


module.exports = stories;