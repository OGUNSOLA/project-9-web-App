var lineCharrt = document.getElementById('lineChat');
var displayButton = document.getElementById('displayButtons');
var barCharrt = document.getElementById('barChart');
var doughnutt = document.getElementById('doughnutChart');
var warning = document.getElementById('warning');
var member = document.getElementById('members');
var messgae = document.getElementById('message');
var send = document.getElementById('send');

var toggleswitch1 = document.getElementById('myonoffswitch');
var toggleswitch2 = document.getElementById('myonoffswitch2');


var timeZone = document.getElementById("member-timezone");
var selectOption = timeZone.selectedIndex;

var save = document.getElementById("save");
var cancel = document.getElementById('cancel');

var parentbutton1 = document.getElementById('parent1');
var parentbutton2 = document.getElementById('parent2');
var parentbutton3 = document.getElementById('parent3');

var  closebtn_A = document.getElementById('closebtn_A');
var  closebtn_B = document.getElementById('closebtn_B');
var  closebtn_C = document.getElementById('closebtn_C');

Chart.defaults.global.animation.duration=200;
Chart.defaults.global.animation.easing='easeInElastic';
Chart.defaults.scale.ticks.beginAtZero=true;
Chart.defaults.global.hover.mode = 'nearest';
Chart.defaults.global.responsive = true;







var weeklyData = {
        labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
        datasets: [
            {
                data: [750,1250,1000,1500,2000,1500,1750,1250,1750,2000,1750,2250],
                backgroundColor: '#3d5377',
                lineTension: 0,
                pointBorderColor: '#7477BF',
                pointRadius: 6,
                pointBorderWidth: 2,
                pointBackgroundColor: '#fff'
            }
        ]
    };

    //Hourly Traffic data set
    var hourlyData = {
        labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
        datasets: [
            {
                data: [1600,2500,1270,750,2050,1750,2150,1750,1050,1050,1500,2000],
                backgroundColor: '#3565b2',
                lineTension: 0,
                pointBorderColor: '#73b0be',
                pointRadius: 6,
                pointBorderWidth: 2,
                pointBackgroundColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#1F4788",
                pointHoverBorderColor: "#1F4788",
                pointHoverBorderWidth: 2
            }
        ]
    };

    //Daily Traffic data set
    var dailyData = {
      labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
      datasets: [
          {
              data: [1750,1250,1500,1750,2250,750,1250,1500,2000,1000,1750,2000],
              backgroundColor: '#464f5e',
              lineTension: 0,
              pointBorderColor: '#7EBEA2',
              pointRadius: 6,
              pointBorderWidth: 2,
              pointBackgroundColor: '#fff',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 2,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#1F4788",
              pointHoverBorderColor: "#1F4788",
              pointHoverBorderWidth: 2
          }
      ]
    };

    //Monthly Traffic data set
    var monthlyData = {
      labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
      datasets: [
          {
              data: [1250,1750,1760,2500,1000,2500,1750,2250,750,1500,1250,2000],
              backgroundColor: '#092554',
              lineTension: 0,
              pointBorderColor: '#4c4b71',
              pointRadius: 6,
              pointBorderWidth: 2,
              pointBackgroundColor: '#fff',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 2,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#1F4788",
              pointHoverBorderColor: "#1F4788",
              pointHoverBorderWidth: 2
          }
      ]
    };


//Draw Traffic Chart
var BoardLineChart = lineCharrt.getContext("2d");
var dashBoardLineChart =new Chart(BoardLineChart,{
	type: 'line',
    data: weeklyData,
    animation: {
        animateScale: true
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 2500,
                    min: 500,
                    stepSize: 500
                },
                gridLines: {
                  drawTicks: false,
              }
            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    }
            }]

        }
    }
});

var hourlyButton = document.getElementById('hourlyButton');
hourlyButton.addEventListener('click',change2hourly,false);

function change2hourly(){
  dailyButton.classList.remove('active');
  weeklyButton.classList.remove('active');
  monthlyButton.classList.remove('active');
  hourlyButton.classList.add('active');
  dashBoardLineChart.config.data = hourlyData;
  dashBoardLineChart.update();
}



var dailyButton = document.getElementById('dailyButton');
dailyButton.addEventListener('click',change2daily,false);

function change2daily(){
  hourlyButton.classList.remove('active');
  weeklyButton.classList.remove('active');
  monthlyButton.classList.remove('active');
  dailyButton.classList.add('active');
  dashBoardLineChart.config.data = dailyData;
  dashBoardLineChart.update();

}




var weeklyButton = document.getElementById('weeklyButton');
weeklyButton.addEventListener('click',change2weekly,false);

function change2weekly(){
  hourlyButton.classList.remove('active');
  dailyButton.classList.remove('active');
  monthlyButton.classList.remove('active');
  weeklyButton.classList.add('active');
  dashBoardLineChart.config.data = weeklyData;
  dashBoardLineChart.update();
}


var monthlyButton = document.getElementById('monthlyButton');
monthlyButton.addEventListener('click',change2monthly,false);

function change2monthly(){
  hourlyButton.classList.remove('active');
  dailyButton.classList.remove('active');
  weeklyButton.classList.remove('active');
  monthlyButton.classList.add('active');
  dashBoardLineChart.config.data = monthlyData;
  dashBoardLineChart.update();
}






//Traffic Widget Buttons
    //Used jQuery here for ease of syntax

    //Change traffic chart active button label on click
    $("#chart-buttons a").click(function() {
        $('#chart-buttons a').removeClass("active"); //take off active class from other buttons
        $(this).addClass("active"); //add active button class to this one
    });

    //Update traffic chart to appropriate data set on button click
     $("#button-hourly").click(function() {
         trafficChart.config.data = hourlyTrafficData;
         trafficChart.update();
     });

     $("#button-weekly").click(function() {
         trafficChart.config.data = weeklyTrafficData;
         trafficChart.update();
     });

     $("#button-daily").click(function() {
         trafficChart.config.data = todayTrafficData;
         trafficChart.update();
     });

     $("#button-monthly").click(function() {
         trafficChart.config.data = monthlyTrafficData;
         trafficChart.update();
     });
























// /* line chart */




// /* bar chart */


var dashBoardBarChart = new Chart(barCharrt, {
    type: 'bar',
    data: {
    	labels:["S","M","T","W","T","F","S","S"],
    	datasets:[
    		{
    			label: "DAILY TRAFFIC",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "#1F4788",
            borderColor: "#1F4788",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#1F4788",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#1F4788",
            pointHoverBorderColor: "#1F4788",
            pointHoverBorderWidth: 2,
            pointRadius: 7,
            pointHitRadius: 10,
            data: [75,100, 175, 125, 225, 200, 100],
            spanGaps: false,
    		}
    	]
    }

});



/* DOUGHNUT CHART */


var dashBoardDoughnutChart = new Chart(doughnutt, {
    type: 'doughnut',
    data: {
    	labels:["Phones", "Tablets","Desktops"],
    	datasets:  [
        {
            data: [65,17.5, 17.5],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
     },
     options:{
     	rotation:115,
        title: {
            display: true,
            text: 'MOBILE USERS',
            position:'top',
            fontColor:'grey'
        },
        legend:{
            position:'right',
            boxWidth:20,
            padding:20
        }
     }

});


/* user autocomplete */

$(function() {
    var alreadyFilled = false;
    var members = ['Olubukola Ogunsola','Jehu Nwaganga','Andrew Mosheshe','Olaoluwa Bamgbose','Gbenga Kaka'];

    function clearDialog() {
        $('.dialog').empty();
    }
    $('.autocomplete input').click(function() {
        if (!alreadyFilled) {
            $('.dialog').addClass('open');
        }

    });
    $('body').on('click', '.dialog > div', function() {
        $('.autocomplete input').val($(this).text()).focus();
        alreadyFilled = true;
    });

    function match(str) {
        str = str.toLowerCase();
        clearDialog();
        for (var i = 0; i < members.length; i++) {
            if (members[i].toLowerCase().startsWith(str)) {
                $('.dialog').append('<div>' + members[i] + '</div>');
            }
        }
    }
    $('.autocomplete input').on('input', function() {
        $('.dialog').addClass('open');
        alreadyFilled = false;
        match($(this).val());
    });
    $('body').click(function(e) {
        if (!$(e.target).is("input")) {
            $('.dialog').removeClass('open');
        }
    });

});



/* message form validation */


send.addEventListener("click",sendMessage,false);

function  sendMessage(e) {
    e.preventDefault();
    if (member.value === '' || message.value === '') {
        console.log(warning);
        warning.style.display="block";
        warning.innerHTML = 'user and message required' ;
        warning.style.color = "white";





    } else {
        warning.style.display="block";
        warning.innerHTML = 'message sent !!';



    }
    hide();


}

function hide(){

    setTimeout(function(){
        warning.style.display='none';

    }, 2000);
    message.value = "";
    member.value = "";

}

function hide2(){
  setTimeout(function(){
      warning2.style.display='none';

  }, 2000);
}


$(function(){
    $('#member-timezone').change(function(){
        localStorage.setItem('timeData',this.value);
    });
    if(localStorage.getItem('timeData')){
        $('#member-timezone').val(localStorage.getItem('timeData'));
    }
});




save.addEventListener("click",saved,false);

window.onload=load;



var i;
var checkboxes = document.querySelectorAll('input[type=checkbox]');

function saved() {
    for (i = 0; i < checkboxes.length; i++) {
        localStorage.setItem(checkboxes[i].value, checkboxes[i].checked);
    }
    warning2.style.display="block";
    warning2.innerHTML = 'settings saved !!';
    hide2();
}

function load() {
    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = localStorage.getItem(checkboxes[i].value) === "true" ? true : false;
    }
}



//Close Alert on Click
$(".closebtn1").click(function() {

    $(".alert1").remove();
  });

  $(".closebtn2").click(function() {
      $(".alert2").remove();
    });

//Notification Menu toggle
$("#icon-bell").click(function() {
  if($('#notifications').css('visibility') == 'hidden'){
    $("#notifications").css('visibility','visible');
  } else {
    $("#notifications").css('visibility','hidden');
  }
});


closebtn_A.addEventListener('click', closer1,false);
closebtn_B.addEventListener('click', closer2,false);
closebtn_C.addEventListener('click', closer3,false);


function closer1(){
  parentbutton1.parentNode.removeChild(parentbutton1);
}

function closer2(){
	parentbutton2.parentNode.removeChild(parentbutton2);
}

function closer3(){
	parentbutton3.parentNode.removeChild(parentbutton3);
}
