// Select all elements with the class "progressbar"
const skills = document.querySelectorAll('.progressbar');
skills.forEach(skill => {
    console.log(skill.id);
})
// ['html', 'css', 'javascript']

// Define a list of skills with their respective percentages
const skillList = [
    { name: 'html', percentage: '90%' },
    { name: 'css', percentage: '80%' },
    { name: 'javascript', percentage: '70%' },
    { name: 'react', percentage: '60%' }
]

    function widthBar() {
        // Iterate over each skill element
        skills.forEach((skill, index) => {
            // Iterate over each skill in the skill list
            skillList.forEach(item => {
                // Check if the element's id matches the skill's name
                if (("progress-" + item.name) === skill.id) {
                    // Set a timeout to stagger the animation of each progress bar
                    setTimeout(() => {
                        // Set the width of the progress bar to the skill's percentage
                        skill.style.width = item.percentage;
                    }, 500 * index);
                }
            });
        });
    }

    widthBar()

