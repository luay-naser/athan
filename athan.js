
function time(){
  axios.get(`https://cors-anywhere.herokuapp.com/https://api.aladhan.com/v1/timingsByCity?city=اسطنبول&country=tr&month=11&year=2024`,{ headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
  } )
      
.then((response) =>{
  let data = response.data.data.timings;
  let content = `
          <div class="card">
            <div class="title">
                <h4>الفجر</h4>
            </div>
            <div class="body">
                <h5>${data.Fajr}</h5>
            </div>

        </div>
        <div class="card">
            <div class="title">
                <h4>الشروق</h4>
            </div>
            <div class="body">
                <h5>${data.Sunrise}</h5>
            </div>

        </div>
        <div class="card">
            <div class="title">
                <h4>الظهر</h4>
            </div>
            <div class="body">
                <h5>${data.Dhuhr}</h5>
            </div>

        </div>
        <div class="card">
            <div class="title">
                <h4>العصر</h4>
            </div>
            <div class="body">
                <h5>${data.Asr}</h5>
            </div>

        </div>
        <div class="card">
            <div class="title">
                <h4>المغرب</h4>
            </div>
            <div class="body">
                <h5>${data.Maghrib}</h5>
            </div>

        </div>
        <div class="card">
            <div class="title">
                <h4>العشاء</h4>
            </div>
            <div class="body">
                <h5>${data.Isha}</h5>
            </div>

        </div>
  `
  let box = document.getElementById("cards")
  box.innerHTML = content;
let dayName = response.data.data.date.hijri;
document.getElementById("day").innerHTML = dayName.weekday.ar;
let dayNum = response.data.data.date.gregorian;
document.getElementById("day").innerHTML +=  " " +dayNum.day + " " + dayNum.month.en;
})
.catch((error)=>{
  console.log("its", error)
})


}

time()

document.getElementById("head").innerHTML = "اسطنبول";
function city(){
  let cityname = document.getElementById("cityName").value
  document.getElementById("head").innerHTML = cityname;

  axios.get(`https://cors-anywhere.herokuapp.com/https://api.aladhan.com/v1/timingsByCity?city=${cityname}&country=tr&month=11&year=2024`, {headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
  })
        
    .then((response) =>{
    let data = response.data.data.timings;
    let content = `
            <div class="card">
              <div class="title">
                  <h4>الفجر</h4>
              </div>
              <div class="body">
                  <h5>${data.Fajr}</h5>
              </div>
  
          </div>
          <div class="card">
              <div class="title">
                  <h4>الشروق</h4>
              </div>
              <div class="body">
                  <h5>${data.Sunrise}</h5>
              </div>
  
          </div>
          <div class="card">
              <div class="title">
                  <h4>الظهر</h4>
              </div>
              <div class="body">
                  <h5>${data.Dhuhr}</h5>
              </div>
  
          </div>
          <div class="card">
              <div class="title">
                  <h4>العصر</h4>
              </div>
              <div class="body">
                  <h5>${data.Asr}</h5>
              </div>
  
          </div>
          <div class="card">
              <div class="title">
                  <h4>المغرب</h4>
              </div>
              <div class="body">
                  <h5>${data.Maghrib}</h5>
              </div>
  
          </div>
          <div class="card">
              <div class="title">
                  <h4>العشاء</h4>
              </div>
              <div class="body">
                  <h5>${data.Isha}</h5>
              </div>
  
          </div>
    `
    let box = document.getElementById("cards")
    box.innerHTML = content;
  })
  .catch((error)=>{
    console.log("its", error)
  })
}
