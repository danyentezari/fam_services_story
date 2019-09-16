const description = "Amina Slaoui is the CEO of AMH Group founded in 1992 which has grown to become a leading social enterprise that provides social services, solutions and products for persons with disability in Morocco, reaching thousands of beneficiaries annually.";

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
        person: `Amina Slaoui`,
        occupation: `Entrepreneur`,
        title: `Social Entreprenuership`,
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