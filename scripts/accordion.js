const accordions = document.querySelectorAll('#accordion')

for(let i = 0; i < accordions.length; i++ ){
    accordions[i].addEventListener('click', e => {
        const append = e.target.nextElementSibling
        if(append.style.display === "block"){
            append.style.display = "none"
        }else{
            append.style.display = "block"
        }
    })
}

const profileDropDown = () => {
    const profileBtn = document.getElementById('profileBtn')
    const profileContainer = document.getElementById('profileContainer')
    profileBtn.addEventListener('click', e => {
        e.preventDefault()
        if(profileContainer.style.display === 'block'){
            profileContainer.style.display = 'none'
        }else{
            profileContainer.style.display = 'block'
        }
    })
}

profileDropDown()
