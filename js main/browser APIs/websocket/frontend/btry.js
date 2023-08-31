navigator.getBattery().then((battery) => {
    function updateAllBatteryInfo() {
      updateChargeInfo();
      updateLevelInfo();
      updateChargingInfo();
      updateDischargingInfo();
    }
    updateAllBatteryInfo();
  
    battery.addEventListener("chargingchange", () => {
      updateChargeInfo();
    });


    function updateChargeInfo() {
      let btryicon =  document.getElementsByClassName('secondicons')[0];
    
      if(battery.charging){
   btryicon.innerHTML = `Charging ...   <i class="fa-solid fa-charging-station"><span class="mx-2">${Math.floor(battery.level * 100)}%</span></i>`
      }else{
   btryicon.innerHTML = `<i class="fa-solid fa-battery-half"><span class="mx-2">${Math.floor(battery.level * 100)}%</span></i>`

      }
    }


    battery.addEventListener("levelchange", () => {
      updateLevelInfo();
    });
    function updateLevelInfo() {
    } 
  
    battery.addEventListener("chargingtimechange", () => {
      updateChargingInfo();
    });
    function updateChargingInfo() {
    }
  
    battery.addEventListener("dischargingtimechange", () => {
      updateDischargingInfo();
    });
    function updateDischargingInfo() {
    }
  });


let date  = new Date();
hour = date.getHours();
Minutes = date.getMinutes();

let time = document.getElementsByClassName("timediv")[0];

time.innerHTML = `Time: ${hour}:${Minutes}`;















