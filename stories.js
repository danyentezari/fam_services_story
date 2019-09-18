const description = "Maud Chifamba, a self-schooled orphan in 2012, made history as the youngest person to secure admission into a university in Zimbabwe and Southern Africa as a whole at the age of 14. The academic whizz-kid, by her feat, secured nearly $10,000 in scholarship funding to cover her education expenses at the University of Zimbabwe due to her sterling performance at the Advance-Level examination. Maud repeated history again when she graduated as the youngest student from any university in Zimbabwe at the age of 18 with a Bachelor of Accounting Honors Degree in 2016.";

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
        person: `Maud Chifamba`,
        occupation: `Student`,
        title: `Educational Milestone`,
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