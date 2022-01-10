
function construct(skillContainer, skillArray)
{ 
    document.querySelector(skillContainer).innerHTML = skillArray.map(skill =>
        `
        <skill class="skill">
            <img src="../../../images/softwares/${skill.imgpath}" alt="">
            <div style="width: 100%;">
                <div> <h4>${skill.name}</h4> </div>
                <div id="sc-${skill.name}" class="skill-level">
                    ${[...Array(6).keys()].map(key => 
                        `<div class="empty-skill ${skill.level > key ? "filled-skill":"" }"></div>`
                        ).join('')}
                </div>
            </div>
        </skill>
        `
    ).join('')
}

construct("#skills-container-programming", skills.languages)
construct("#skills-container-frameworks", skills.frameworks)
construct("#skills-container-graphics", skills.graphics)