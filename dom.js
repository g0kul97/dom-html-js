// 1.question

document.getElementById('btn').addEventListener('click',function(){
    document.getElementById('colorSelect').removeChild(document.getElementById('colorSelect').firstChild)
})

// 2.question

document.getElementById('btn1').addEventListener('click',function(){
    const SelectedTask= document.getElementById('color').value

    const ParaTask = document.getElementById('para')

    ParaTask.style.color = SelectedTask
})

// 3.question

function Name (event) {
    event.preventDefault()
const firstName = document.getElementById('form1').elements.fname.value
const lastName = document.getElementById('form1').elements.lname.value

alert("First Name :" + firstName + "\nLast Name :" + lastName)

}
document.getElementById('form1').addEventListener('submit', Name)



// 4.question
function volsphere(event){
    event.preventDefault()
    
    let volume;
    let radius = document.getElementById('radius').value;
    radius = Math.abs(radius);
    volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById('volume').value = volume;
    return false;
   } 
  document.getElementById('form').addEventListener('submit',volsphere)


// 5.question

document.getElementById('imgbt').addEventListener('click',imageChange)

function imageChange() { document.getElementById('img').src='http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width:500, height:343'
}

// 6.question

document.getElementById('url').addEventListener('click',function(){
    const page = "https://www.samsung.com/in/"

    window.open(page,'_blank')
})

// 7.question

document.getElementById('btn2').addEventListener('click',function(){
    const redirect = "https://www.apple.com/in/"

    window.location.href =redirect
})

// 8.question

function URLinfo(){
    const currentURL = window.location.href

    const url = new URL (currentURL)
    const protocol = url.protocol
    const hostname = url.hostname
    const searchParams = url.searchParams
    const info = " URL's Protocol : " + protocol + "  and  " + "Host name : " + hostname + "  and  "+ "Query Parameters : " + searchParams

    document.getElementById('info').innerHTML= info
}
document.getElementById('nwurl').addEventListener('click',URLinfo)

// 9.question

document.getElementById('ReFresh').addEventListener('click',()=>{

    location.reload()
})

// 10.question

function screenSizeinfo(){
    const ScreenWidth = window.innerWidth
    const ScreenHeight = window.innerHeight

    const ScreenSize = "Screen Width :"+ ScreenWidth + "and" + "Screen Height: "+ ScreenHeight
    document.getElementById('viewinfo').innerHTML= ScreenSize
}

document.getElementById('ViewPort').addEventListener('click', screenSizeinfo)

// 11.question

function StartCountdown(){

    let value = 10

    function UpdateCountdown(){
        document.getElementById('strcount').innerHTML= "Time remaining :" + value +"seconds"
         
        if (value === 0){
            alert("Countdown reached zero")
        } else{
            value--

            setTimeout(UpdateCountdown,1000)
        }
    }
    UpdateCountdown()
}
document.getElementById('count').addEventListener('click',StartCountdown)