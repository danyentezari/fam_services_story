const description = "Oke Maduewesi is the Chief Executive Officer of Zaron Cosmetics, an indigenous cosmetic company based in Nigeria. She holds a degree in Economics, from Edo State University, Ekpoma and a Master’s degree in Business Administration (MBA) from University of Leeds, United Kingdom. Oke is a firm believer in hard work and self-drive, which she has named as key values that helped her grow into the woman that she is today.";

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
        person: `Oke Maduewesi`,
        occupation: `Chief Executive Officer`,
        title: `Business Enterprise`,
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