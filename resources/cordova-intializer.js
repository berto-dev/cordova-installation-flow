<!--
    important note:
    html of this file is based on deprecated custom framework
    It's obivious you can make all in any style you want
-->


const app = {

    initialize: function()
    {

        if( !window.hasOwnProperty('cordova')  ) //'cordova' in window //!window.hasOwnProperty('cordova') //document.querySelectorAll("script[src='cordova.js']")[0].innerText != ''
        {
            /* use browser weblink*/
            app.type = 'browser-web';
            console.log('WEB SYSTEM DEVICE [browser]');
            // document.addEventListener('load', app.ready,true);
        }
        else
        {
            /* use app webview */
            app.type = 'cordova-app';
            console.log('APP SYSTEM DEVICE [webview]');
            // document.addEventListener('deviceready', app.ready,false);
        }

        console.log('APP TYPE : '+app.type);
        document.addEventListener('deviceready', app.ready, false);

    },

    ready: function()
    {

        systemcheck();                    //cordova info
        connectionstatus('deviceready');  //cordova native
        checkConnection();                //cordova plugin add cordova-plugin-network-information
        miniclock();                      //cordova plugin add cordova-plugin-globalization
        batteryReport();                  //cordova plugin add cordova-plugin-battery-status

    }

};

app.initialize();

function systemcheck()
{


    if(document.getElementById('sysstandby'))
    {

      let sysstandby = document.getElementById('sysstandby'),
          sysready = document.getElementById('sysready');

        sysready.innerHTML =
        `
          <div class="grid-x font-tone-3 font-small">
            <div class="box-[50-50-50] align-right">
              <p><b>PLATFORM: &nbsp;&nbsp;</b></p>
            </div>
            <div class="box-[50-50-50]">
              <p>`+device.platform +`</p>
            </div>
            <div class="box-[50-50-50] align-right">
              <p><b>MODEL:&nbsp;&nbsp;</b></p>
            </div>
            <div class="box-[50-50-50]">
              <p>`+device.model +`</p>
            </div>
            <div class="box-[50-50-50] align-right">
              <p><b>UIID:&nbsp;&nbsp;</b></p>
            </div>
            <div class="box-[50-50-50]">
              <p>`+device.uuid +`</p>
            </div>
            <div class="box-[50-50-50] align-right">
              <p><b>DEVICE-V:&nbsp;&nbsp;</b></p>
            </div>
            <div class="box-[50-50-50]">
              <p>`+device.version +`</p>
            </div>
            <div class="box-[50-50-50] align-right">
              <p><b>PRODUCER:&nbsp;&nbsp;</b></p>
            </div>
            <div class="box-[50-50-50]">
              <p>`+device.manufacturer +`</p>
            </div>
            <div class="box-[50-50-50] align-right">
              <p><b>VIRTUALIZATION:&nbsp;&nbsp;</b></p>
            </div>
            <div class="box-[50-50-50]">
              <p>`+device.isVirtual +`</p>
            </div>
            <div class="box-[50-50-50] align-right">
              <p><b>SERIAL: &nbsp;&nbsp;</b></p>
            </div>
            <div class="box-[50-50-50]">
              <p>`+device.serial+`</p>
            </div>
          </div>
        `;

        sysstandby.setAttribute('style', 'display:none;');
        sysready.setAttribute('style', 'display:block;');
  }

}

function miniclock()
{


    let target = [...document.querySelectorAll(".add_miniclock")][0];

    if(target)
    {

      navigator.globalization.dateToString(

        new Date(),

        function (date)
        {
          for (let i = 0; i < target.length; i++)
          {
            target[i].innerHTML = date.value;
          }
        },

        function ()
        {
          for (let i = 0; i < target.length; i++)
          {
            target[i].innerHTML = "--:--";
          }
        },

        { formatLength: 'short', selector: 'time' }

    );

  }


}

function connectionstatus(statustype)
{


  let target = [...document.querySelectorAll(".add_appstatus")][0];

  if(target)
  {
    for (let i = 0; i < target.length; i++)
    {
      if(statustype == "deviceready")
      {
          target[i].innerHTML = "Online"
      }
      else
      {
         target[i].innerHTML = "Loading..."
      }
    }
  }


}

function checkConnection()
{

 let  networkState = navigator.connection.type,
      states = {},
      target = [...document.querySelectorAll(".add_phonenetwork")],
      appstatus = [...document.querySelectorAll(".add_appstatus")];

 if(target)
 {

   for (let i = 0; i < target.length; i++)
   {

     switch (networkState)
     {

       case  "cellular":
       const basicconnection = `
       <span class="connectionicon">
       <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE1LjgxOCAxNS44MTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE1LjgxOCAxNS44MTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPGc+Cgk8cGF0aCBkPSJNMTIuMzY2LDkuOTJjMCwyLjQ2MS0xLjk5NSw0LjQ1Ny00LjQ1Nyw0LjQ1N1MzLjQ1MiwxMi4zODIsMy40NTIsOS45MnMxLjk5NS00LjQ1Nyw0LjQ1Ny00LjQ1NyAgIFMxMi4zNjYsNy40NTgsMTIuMzY2LDkuOTJ6IE04LjAxNywxLjQ1MVYxLjQ0Yy0wLjAzNiwwLTAuMDcyLDAuMDA1LTAuMTA5LDAuMDA1QzcuODcyLDEuNDQ1LDcuODM2LDEuNDQsNy44LDEuNDR2MC4wMTEgICBDMy40OCwxLjU2OSwwLDUuMTEyLDAsOS40NThoMS42OTdjMC0zLjQ0OSwyLjc3Ny02LjI1Niw2LjIxMi02LjMxNWMzLjQzNiwwLjA1OSw2LjIxMywyLjg2Nyw2LjIxMyw2LjMxNWgxLjY5NiAgIEMxNS44MTcsNS4xMSwxMi4zMzgsMS41NjgsOC4wMTcsMS40NTF6IiBmaWxsPSIjYWJhYmFiIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
       </span>`;
       target[i].innerHTML = basicconnection;
       appstatus[i].innerHTML = "[LOW CONNECTION]";
       break;
       case  "2g":
       const slowconnection = `
       <span class="connectionicon">
       <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDIyNC43MiAyMjQuNzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIyNC43MiAyMjQuNzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTQyLjcxOSwxNzMuMDExYzAsMTYuNzY0LTEzLjU2NywzMC4zMjctMzAuMzMxLDMwLjMyN2MtMTYuNzQ2LDAtMzAuMzIyLTEzLjU2My0zMC4zMjItMzAuMzI3ICAgYzAtMTYuNzYsMTMuNTc3LTMwLjMyNywzMC4zMjItMzAuMzI3QzEyOS4xNTEsMTQyLjY4NCwxNDIuNzE5LDE1Ni4yNTEsMTQyLjcxOSwxNzMuMDExeiBNNDIuNjA0LDExNC42NGwyMy4yNDQsMTkuNDg1ICAgYzIzLjE5LTI3LjY4OCw2OS45NjQtMjcuNjg4LDkzLjEyNywwLjAzMmwyMy4yNzktMTkuNDI5Yy0xNy4zODUtMjAuNzktNDIuODQ0LTMyLjY5My02OS44NjEtMzIuNjkzICAgQzg1LjM4Miw4Mi4wMzUsNTkuOTQxLDkzLjkxMSw0Mi42MDQsMTE0LjY0eiBNMCw3MS4xOThsMjIuNDc5LDIwLjM3NGMyMi45NTEtMjUuMzUyLDU1LjcyMy0zOS44NjQsODkuOTA5LTM5Ljg2NCAgIGMzNC4xNzcsMCw2Ni45MzEsMTQuNTEyLDg5Ljg4MywzOS44MDNsMjIuNDQ5LTIwLjM3NGMtMjguNjk4LTMxLjYyOS02OS42MjMtNDkuNzU2LTExMi4zMjctNDkuNzU2ICAgQzY5LjY1NiwyMS4zODIsMjguNjk4LDM5LjU2OSwwLDcxLjE5OHoiIGZpbGw9IiNhYmFiYWIiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
       </span>`;
       target[i].innerHTML = slowconnection;
       appstatus[i].innerHTML = "[SLOW CONNECTION]";
       break;
       case  "3g":
       const mediumconnection = `
       <span class="connectionicon">
       <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMxMC4yNDkgMzEwLjI0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzEwLjI0OSAzMTAuMjQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTE4NS40NzUsMjQ2LjEwNGMwLDE2Ljc1OS0xMy41NjIsMzAuMzIxLTMwLjMyMiwzMC4zMjFjLTE2Ljc2MiwwLTMwLjMyNi0xMy41NjItMzAuMzI2LTMwLjMyMSAgIGMwLTE2Ljc2NSwxMy41NjQtMzAuMzI3LDMwLjMyNi0zMC4zMjdDMTcxLjkxMiwyMTUuNzc3LDE4NS40NzUsMjI5LjMzOSwxODUuNDc1LDI0Ni4xMDR6IE04NS4zNDcsMTg3LjcyOGwyMy4yNDksMTkuNDk0ICAgYzIzLjE4OC0yNy42OTQsNjkuOTgtMjcuNjk0LDkzLjEzOCwwLjAyM2wyMy4yNzktMTkuNDNjLTE3LjM4NS0yMC43ODItNDIuODUzLTMyLjY5LTY5Ljg2MS0zMi42OSAgIEMxMjguMTQyLDE1NS4xMjUsMTAyLjcwNCwxNjcuMDAxLDg1LjM0NywxODcuNzI4eiBNNDIuNzY1LDE0NC4yODdsMjIuNDc3LDIwLjM3NmMyMi45NTEtMjUuMzUxLDU1LjcwNC0zOS44NjEsODkuOTExLTM5Ljg2MSAgIGMzNC4xNzgsMCw2Ni45MzEsMTQuNTEsODkuODg0LDM5LjgwMWwyMi40NDgtMjAuMzc2Yy0yOC43MDItMzEuNjI5LTY5LjYzMy00OS43NTEtMTEyLjMzMi00OS43NTEgICBDMTEyLjQxOCw5NC40NzUsNzEuNDYsMTEyLjY1OCw0Mi43NjUsMTQ0LjI4N3ogTTAsMTAxLjJsMjIuMTUsMjAuNzAxYzM0LjI5My0zNi42OTcsODIuNzc1LTU3Ljc1MywxMzMuMDAyLTU3Ljc1MyAgIGM1MC45NywwLDk4LjE3MiwyMC40OTYsMTMyLjk0Miw1Ny42OTJsMjIuMTU0LTIwLjczM2MtMzkuOTgzLTQyLjc2LTk2LjUyLTY3LjI4My0xNTUuMDk3LTY3LjI4MyAgIEM5Ni41NDMsMzMuODI0LDQwLjAwOSw1OC4zNzUsMCwxMDEuMnoiIGZpbGw9IiNhYmFiYWIiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
       </span>`;
       target[i].innerHTML = mediumconnection;
       break;
       case  "4g":
       const hightconnection = `
       <span class="connectionicon">
       <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDUwNy42MDkgNTA3LjYwOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTA3LjYwOSA1MDcuNjA5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI4NS43OTcsNDEzLjgwNWMwLDE3LjY4OC0xNC4zMTIsMzItMzIsMzJjLTE3LjY3MiwwLTMyLTE0LjMxMi0zMi0zMnMxNC4zMjgtMzIsMzItMzIgICBDMjcxLjQ4NCwzODEuODA1LDI4NS43OTcsMzk2LjExNywyODUuNzk3LDQxMy44MDV6IE0xODAuMTU2LDM1Mi4yMTFsMjQuNTMxLDIwLjU2MmMyNC40NjktMjkuMjE5LDczLjgyOC0yOS4yMTksOTguMjY2LDAuMDMxICAgbDI0LjU2Mi0yMC41Yy0xOC4zNDQtMjEuOTM4LTQ1LjIwMy0zNC41LTczLjcxOS0zNC41QzIyNS4yOTcsMzE3LjgwNSwxOTguNDUzLDMzMC4zMzYsMTgwLjE1NiwzNTIuMjExeiBNMTM1LjIwMywzMDYuMzY3ICAgbDIzLjcxOSwyMS41YzI0LjIxOS0yNi43NSw1OC43OTctNDIuMDYyLDk0Ljg3NS00Mi4wNjJjMzYuMDYyLDAsNzAuNjI1LDE1LjMxMiw5NC44NDQsNDJsMjMuNjg4LTIxLjUgICBjLTMwLjI4Mi0zMy4zNzUtNzMuNDctNTIuNS0xMTguNTMyLTUyLjVDMjA4LjcwMywyNTMuODA1LDE2NS40ODUsMjcyLjk5MiwxMzUuMjAzLDMwNi4zNjd6IE05MC4wOTQsMjYwLjg5OGwyMy4zNzUsMjEuODQ0ICAgYzM2LjE4Ny0zOC43MTksODcuMzI4LTYwLjkzOCwxNDAuMzI4LTYwLjkzOGM1My43ODEsMCwxMDMuNTk0LDIxLjYyNSwxNDAuMjgxLDYwLjg3NWwyMy4zNzUtMjEuODc1ICAgYy00Mi4xODgtNDUuMTI1LTEwMS44NDQtNzEtMTYzLjY1Ni03MUMxOTEuOTY5LDE4OS44MDUsMTMyLjI5NywyMTUuNzExLDkwLjA5NCwyNjAuODk4eiBNNDQuODc1LDIxNS41MjNsMjMuMjE5LDIyLjAzMSAgIGM0OC44MjgtNTEuNDM3LDExNC43ODEtNzkuNzUsMTg1LjcwMy03OS43NWM3MC45MDYsMCwxMzYuODEyLDI4LjI4MSwxODUuNjI1LDc5LjYyNWwyMy4xODgtMjIuMDMxICAgYy01NC45MDYtNTcuNzgxLTEyOS4wNjItODkuNTk0LTIwOC44MTItODkuNTk0QzE3NC4wMTYsMTI1LjgwNSw5OS44MjgsMTU3LjY4LDQ0Ljg3NSwyMTUuNTIzeiBNMjUzLjc5Nyw2MS44MDUgICBDMTU3LjM0NCw2MS44MDUsNjcuMjE5LDEwMC40MywwLDE3MC40OTNsMjMuMDk0LDIyLjE4OGM2MS4xMjUtNjMuNzUxLDE0My4wNjItOTguODc2LDIzMC43MDMtOTguODc2ICAgYzg3LjY1NiwwLDE2OS41OTQsMzUuMTI1LDIzMC42ODgsOTguODQ0bDIzLjEyNS0yMi4xNTZDNDQwLjM5MSwxMDAuMzk4LDM1MC4yNjYsNjEuODA1LDI1My43OTcsNjEuODA1eiIgZmlsbD0iI2FiYWJhYiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
       </span>`;
       target[i].innerHTML = hightconnection;
       break;
       case  "wifi":
       const wificonnection = `
       <span class="connectionicon">
       <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTExNiwyNTZjMC0zNy40MiwxNC41NjItNzIuNiw0MS4wMDUtOTkuMDU5YzcuODExLTcuODE2LDcuODExLTIwLjQ4OCwwLTI4LjMwM2MtNy44MS03LjgxNy0yMC40NzMtNy44MTctMjguMjg0LTAuMDAxICAgICBDOTQuNzIzLDE2Mi42NTcsNzYsMjA3Ljg4OCw3NiwyNTZzMTguNzIzLDkzLjM0Myw1Mi43MjEsMTI3LjM2M2M3LjgxLDcuODE1LDIwLjQ3Myw3LjgxNSwyOC4yODQtMC4wMDEgICAgIGM3LjgxMS03LjgxNSw3LjgxMS0yMC40ODcsMC0yOC4zMDNDMTMwLjU2MiwzMjguNiwxMTYsMjkzLjQyLDExNiwyNTZ6IiBmaWxsPSIjYWJhYmFiIi8+CgkJCTxwYXRoIGQ9Ik00MCwyNTZjMC01Ny43MzQsMjIuNDY4LTExMi4wMTIsNjMuMjY0LTE1Mi44MzVjNy44MTEtNy44MTYsNy44MTEtMjAuNDg4LDAtMjguMzA0Yy03LjgxMS03LjgxNS0yMC40NzQtNy44MTUtMjguMjg0LDAgICAgIEMyNi42MjgsMTIzLjI0NiwwLDE4Ny41NzUsMCwyNTZzMjYuNjI4LDEzMi43NTQsNzQuOTgxLDE4MS4xMzljNy44MDksNy44MTQsMjAuNDczLDcuODE2LDI4LjI4NCwwICAgICBjNy44MTEtNy44MTYsNy44MTEtMjAuNDg4LDAtMjguMzA0QzYyLjQ2OCwzNjguMDEyLDQwLDMxMy43MzQsNDAsMjU2eiIgZmlsbD0iI2FiYWJhYiIvPgoJCQk8cGF0aCBkPSJNMjU2LDE1MS45MzJjLTU3LjM0NiwwLTEwNCw0Ni42ODUtMTA0LDEwNC4wNjhzNDYuNjU0LDEwNC4wNjgsMTA0LDEwNC4wNjhTMzYwLDMxMy4zODMsMzYwLDI1NiAgICAgUzMxMy4zNDYsMTUxLjkzMiwyNTYsMTUxLjkzMnogTTI1NiwzMjAuMDQyYy0zNS4yOSwwLTY0LTI4LjcyOS02NC02NC4wNDJzMjguNzEtNjQuMDQyLDY0LTY0LjA0MmMzNS4yOSwwLDY0LDI4LjcyOSw2NCw2NC4wNDIgICAgIFMyOTEuMjksMzIwLjA0MiwyNTYsMzIwLjA0MnoiIGZpbGw9IiNhYmFiYWIiLz4KCQkJPHBhdGggZD0iTTQzNy4wMTgsNzQuODYxYy03LjgxLTcuODE2LTIwLjQ3My03LjgxNS0yOC4yODQsMC4wMDFjLTcuODExLDcuODE2LTcuODEsMjAuNDg3LDAuMDAxLDI4LjMwMyAgICAgQzQ0OS41MzIsMTQzLjk4OCw0NzIsMTk4LjI2Niw0NzIsMjU2cy0yMi40NjgsMTEyLjAxMi02My4yNjQsMTUyLjgzNWMtNy44MTEsNy44MTYtNy44MTIsMjAuNDg3LTAuMDAxLDI4LjMwMyAgICAgYzcuODA4LDcuODE0LDIwLjQ3MSw3LjgxOSwyOC4yODQsMC4wMDFDNDg1LjM3MSwzODguNzU0LDUxMiwzMjQuNDI1LDUxMiwyNTZTNDg1LjM3MSwxMjMuMjQ2LDQzNy4wMTgsNzQuODYxeiIgZmlsbD0iI2FiYWJhYiIvPgoJCQk8cGF0aCBkPSJNMzgzLjI3OCwxMjguNjM3Yy03LjgxLTcuODE2LTIwLjQ3My03LjgxNS0yOC4yODQsMC4wMDFjLTcuODExLDcuODE2LTcuODEsMjAuNDg3LDAuMDAxLDI4LjMwMyAgICAgQzM4MS40MzcsMTgzLjQsMzk2LDIxOC41OCwzOTYsMjU2YzAsMzcuNDItMTQuNTYyLDcyLjYtNDEuMDA1LDk5LjA1OWMtNy44MTEsNy44MTYtNy44MTIsMjAuNDg3LTAuMDAxLDI4LjMwMyAgICAgYzcuODA4LDcuODE0LDIwLjQ3MSw3LjgxOSwyOC4yODQsMC4wMDFDNDE3LjI3NiwzNDkuMzQzLDQzNiwzMDQuMTEyLDQzNiwyNTZTNDE3LjI3NiwxNjIuNjU3LDM4My4yNzgsMTI4LjYzN3oiIGZpbGw9IiNhYmFiYWIiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
       </span>`;
       target[i].innerHTML = wificonnection;
       break;
       case  "ethernet":
       const ethconnection = `
       <span class="connectionicon">
       <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0NjkuMzMzIDQ2OS4zMzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ2OS4zMzMgNDY5LjMzMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNNDI2LjY2NywwaC0zODRDMTkuMTM1LDAsMCwxOS4xMzUsMCw0Mi42Njd2Mzg0YzAsMjMuNTMxLDE5LjEzNSw0Mi42NjcsNDIuNjY3LDQyLjY2N2gzODQgICAgIGMyMy41MzEsMCw0Mi42NjctMTkuMTM1LDQyLjY2Ny00Mi42Njd2LTM4NEM0NjkuMzMzLDE5LjEzNSw0NTAuMTk4LDAsNDI2LjY2NywweiBNNDQ4LDQyNi42NjcgICAgIGMwLDExLjc2LTkuNTczLDIxLjMzMy0yMS4zMzMsMjEuMzMzaC0zODRjLTExLjc2LDAtMjEuMzMzLTkuNTczLTIxLjMzMy0yMS4zMzN2LTM4NGMwLTExLjc2LDkuNTczLTIxLjMzMywyMS4zMzMtMjEuMzMzaDM4NCAgICAgYzExLjc2LDAsMjEuMzMzLDkuNTczLDIxLjMzMywyMS4zMzNWNDI2LjY2N3oiIGZpbGw9IiNiM2IzYjMiLz4KCQkJPHBhdGggZD0iTTM1MiwxMDYuNjY3SDExNy4zMzNjLTE3LjY0NiwwLTMyLDE0LjM1NC0zMiwzMnYxNzAuNjY3YzAsMTcuNjQ2LDE0LjM1NCwzMiwzMiwzMmg1My4zMzNWMzUyYzAsMTcuNjQ2LDE0LjM1NCwzMiwzMiwzMiAgICAgaDY0YzE3LjY0NiwwLDMyLTE0LjM1NCwzMi0zMnYtMTAuNjY3SDM1MmMxNy42NDYsMCwzMi0xNC4zNTQsMzItMzJWMTM4LjY2N0MzODQsMTIxLjAyMSwzNjkuNjQ2LDEwNi42NjcsMzUyLDEwNi42Njd6ICAgICAgTTM2Mi42NjcsMzA5LjMzM2MwLDUuODg1LTQuNzgxLDEwLjY2Ny0xMC42NjcsMTAuNjY3aC02NGMtNS44OTYsMC0xMC42NjcsNC43NzEtMTAuNjY3LDEwLjY2N1YzNTIgICAgIGMwLDUuODg1LTQuNzgxLDEwLjY2Ny0xMC42NjcsMTAuNjY3aC02NGMtNS44ODUsMC0xMC42NjctNC43ODEtMTAuNjY3LTEwLjY2N3YtMjEuMzMzYzAtNS44OTYtNC43NzEtMTAuNjY3LTEwLjY2Ny0xMC42NjdoLTY0ICAgICBjLTUuODg1LDAtMTAuNjY3LTQuNzgxLTEwLjY2Ny0xMC42NjdWMTM4LjY2N2MwLTUuODg1LDQuNzgxLTEwLjY2NywxMC42NjctMTAuNjY3SDEyOHY1My4zMzMgICAgIGMwLDUuODk2LDQuNzcxLDEwLjY2NywxMC42NjcsMTAuNjY3czEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3VjEyOEgxOTJ2NTMuMzMzYzAsNS44OTYsNC43NzEsMTAuNjY3LDEwLjY2NywxMC42NjcgICAgIHMxMC42NjctNC43NzEsMTAuNjY3LTEwLjY2N1YxMjhIMjU2djUzLjMzM2MwLDUuODk2LDQuNzcxLDEwLjY2NywxMC42NjcsMTAuNjY3czEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3VjEyOEgzMjB2NTMuMzMzICAgICBjMCw1Ljg5Niw0Ljc3MSwxMC42NjcsMTAuNjY3LDEwLjY2N2M1Ljg5NiwwLDEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3VjEyOEgzNTJjNS44ODUsMCwxMC42NjcsNC43ODEsMTAuNjY3LDEwLjY2N1YzMDkuMzMzeiIgZmlsbD0iI2IzYjNiMyIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
       </span>`;
       target[i].innerHTML = ethconnection;
       break;
       default:
       const noconnection = `
       <span class="connectionicon">
       <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDU0OS43NiA1NDkuNzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU0OS43NiA1NDkuNzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMzMyLjYyMiw0NTQuNzc2YzAsMzEuNTgtMjUuNTgyLDU3LjE2Mi01Ny4xNjEsNTcuMTYyUzIxOC4zLDQ4Ni4zNTYsMjE4LjMsNDU0Ljc3NmMwLTMxLjU3OCwyNS41ODItNTcuMTYsNTcuMTYxLTU3LjE2ICAgUzMzMi42MjIsNDIzLjE5OCwzMzIuNjIyLDQ1NC43NzZ6IE0zNjUuMjQxLDI1NC4wNDFjLTE3Ljk5Mi03LjU4OS0zNi42NTgtMTIuODUyLTU1LjgxNC0xNS42NjdsOTcuMTI1LDk3LjA2M2wzMi4wMDctMzIuMDA4ICAgQzQxNy4zODQsMjgyLjI1NCwzOTIuNzIsMjY1LjYwNywzNjUuMjQxLDI1NC4wNDF6IE0xNzcuNDE4LDI1Ny42NTJjLTI1LjM5OCwxMS45MzQtNDguMjI2LDI4LjIxMi02Ny44MSw0OC41MzFsNzAuMzgsNjguMDU1ICAgYzIwLjQ0MS0yMS4xNzYsNDYuNTczLTM0LjU3OCw3NS4wMzEtMzguOTg0TDE3Ny40MTgsMjU3LjY1MnogTTYwLjk1NSwxNDEuMTI3QzM5LjEwNiwxNTUuNTcsMTguNzI3LDE3Mi4xNTUsMCwxOTAuOTQ0ICAgbDY5LjIxNyw2OS4yMTdjMTguODUtMTguODUsMzkuOTY0LTM0Ljg4NCw2Mi45MTQtNDcuNzk3TDYwLjk1NSwxNDEuMTI3eiBNNDI2LjMxOSwxMDcuMSAgIGMtNDcuNzk4LTIwLjA3NC05OC41OTQtMzAuMjk0LTE1MC44NTgtMzAuMjk0Yy0zOC4xMjcsMC03NS4zOTgsNS40NDctMTExLjMyMywxNi4xNTdsODMuMTA5LDgzLjEwOSAgIGM5LjMwMy0wLjkxOCwxOC43MjgtMS4zNDYsMjguMjEzLTEuMzQ2Yzc3LjQxOCwwLDE1MC4zMDgsMjkuOTg4LDIwNS4zMjYsODQuNDU2bDY4Ljk3My02OS41MjMgICBDNTE0LjAxOSwxNTQuMjg1LDQ3Mi41MjUsMTI2LjUsNDI2LjMxOSwxMDcuMXogTTMzLjI5Miw3Ny42NjNsMzgyLjU2MSwzODIuNTYxbDM5Ljg0Mi0zOS44NDJMNzMuMTM0LDM3LjgyMUwzMy4yOTIsNzcuNjYzeiIgZmlsbD0iI2UwMjIyZSIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
       </span>`;
       target[i].innerHTML = noconnection;
       appstatus[i].innerHTML = "Offline";

     }

   }

 }

}

function batteryReport()
{
  window.addEventListener('batterystatus', (info)=>{

      let target = [...document.querySelectorAll(".add_phonebattery")];

      if(target)
      {

        for (let i = 0; i < target.length; i++) {

        if(info.isPlugged)
        {
           const isPlugged = `
           <span class="batteryicon">
              <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDU2OS4xNiA1NjkuMTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2OS4xNiA1NjkuMTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDcxLjEwOCw5Ni4zOTJIMzYuMjdjLTIwLDAtMzYuMjcsMTYuMjI3LTM2LjI3LDM2LjE3MnYzMDQuMDMzYzAsMTkuOTQ1LDE2LjI3LDM2LjE3MiwzNi4yNywzNi4xNzJoNDM0LjgzOCAgICBjMjAsMCwzNi4yNzMtMTYuMjI3LDM2LjI3My0zNi4xNzJWMTMyLjU2NEM1MDcuMzgyLDExMi42MTksNDkxLjEwOCw5Ni4zOTIsNDcxLjEwOCw5Ni4zOTJ6IE03MC42MDEsMjg3LjY0MiAgICBjMC0yMS4xMjYsMTcuMTI2LTM4LjI1LDM4LjI1LTM4LjI1aDU3LjA1aDkuMThoOS4xOHYtMzguMTgzYzAtMTUuOTczLDEyLjk0Ny0yOC45MiwyOC45Mi0yOC45Mmg5OC4xNCAgICBjMy4zODIsMCw2LjEyLDIuNzM5LDYuMTIsNi4xMnYyOS4wMjd2Ni41djMwLjkzN3Y2LjV2NTIuNTM0djYuNXYzMC45MzZ2Ni41djI5LjAyN2MwLDMuMzgxLTIuNzM4LDYuMTIxLTYuMTIsNi4xMjFoLTk4LjE0ICAgIGMtMTUuOTczLDAtMjguOTItMTIuOTQ3LTI4LjkyLTI4LjkyMnYtMzguMThoLTkuMThoLTkuMThoLTU3LjA1Qzg3LjcyNywzMjUuODkyLDcwLjYwMSwzMDguNzY1LDcwLjYwMSwyODcuNjQyeiBNMzk4LjUyOCwzNTguODI3ICAgIGgtNjIuNzI5di02LjEyMXYtMzMuNjZ2LTYuMTE5aDYyLjcyOWMxMi42NzgsMCwyMi45NSwxMC4yNzUsMjIuOTUsMjIuOTQ5QzQyMS40NzksMzQ4LjU1Miw0MTEuMjA2LDM1OC44MjcsMzk4LjUyOCwzNTguODI3eiAgICAgTTM5OC41MjgsMjYyLjM1NGgtNjIuNzI5di02LjEydi0zMy42NnYtNi4xMmg2Mi43MjljMTIuNjc4LDAsMjIuOTUsMTAuMjc2LDIyLjk1LDIyLjk1ICAgIEM0MjEuNDc5LDI1Mi4wNzksNDExLjIwNiwyNjIuMzU0LDM5OC41MjgsMjYyLjM1NHoiIGZpbGw9IiM5ZGUzMjQiLz4KCQk8cGF0aCBkPSJNNTMyLjg5LDE3NC44OTNjMCwwLTEuNjA5LDAtMy41OTIsMGMtMS45ODMsMC0zLjU5MywyLjcyNy0zLjU5Myw2LjA4NnYyMDcuMTk5YzAsMy4zNjEsMS42MDYsNi4wODYsMy41OTMsNi4wODZoMy41OTIgICAgYzIwLDAsMzYuMjcxLTE2LjIyNywzNi4yNzEtMzYuMTcyVjIxMS4wNjVDNTY5LjE2LDE5MS4xMiw1NTIuODksMTc0Ljg5Myw1MzIuODksMTc0Ljg5M3oiIGZpbGw9IiM5ZGUzMjQiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
           </span>
           <span><p> `+info.level+`% </p></span>`;
           target[i].innerHTML = isPlugged;
        }

        else if(!info.isPlugged)
        {

          if(info.level > 50)
          {
             const battery100 = `
             <span class="batteryicon">
                <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDU2OS4xNTYgNTY5LjE1NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTY5LjE1NiA1NjkuMTU2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3MS4xMDksOTYuMzlIMzYuMjcxQzE2LjI3LDk2LjM5LDAsMTEyLjYxNywwLDEzMi41NjJ2MzA0LjAzM2MwLDE5Ljk0NSwxNi4yNywzNi4xNzIsMzYuMjcxLDM2LjE3Mmg0MzQuODM5ICAgIGMyMCwwLDM2LjI3LTE2LjIyNywzNi4yNy0zNi4xNzJWMTMyLjU2MkM1MDcuMzc5LDExMi42MTcsNDkxLjEwOSw5Ni4zOSw0NzEuMTA5LDk2LjM5eiBNMTI2LjkxMSw0MjIuMDYzICAgIGMwLDExLjQ1NS05LjMxNCwyMC43NDYtMjAuODAyLDIwLjc0Nkg1My41NDFjLTExLjQ5LDAtMjAuODAyLTkuMjkxLTIwLjgwMi0yMC43NDZ2LTI3NC45N2MwLTExLjQ1OSw5LjMxNC0yMC43NDcsMjAuODAyLTIwLjc0NyAgICBoNTIuNTY1YzExLjQ5LDAsMjAuODAyLDkuMjg3LDIwLjgwMiwyMC43NDd2Mjc0Ljk3SDEyNi45MTF6IE0yNDIuNzUsNDIyLjA2M2MwLDExLjQ1NS05LjMxNCwyMC43NDYtMjAuODAyLDIwLjc0NmgtNTIuNTY1ICAgIGMtMTEuNDksMC0yMC44MDItOS4yOTEtMjAuODAyLTIwLjc0NnYtMjc0Ljk3YzAtMTEuNDU5LDkuMzE0LTIwLjc0NywyMC44MDItMjAuNzQ3aDUyLjU2NWMxMS40OSwwLDIwLjgwMiw5LjI4NywyMC44MDIsMjAuNzQ3ICAgIFY0MjIuMDYzTDI0Mi43NSw0MjIuMDYzeiBNMzU4LjU5Miw0MjIuMDYzYzAsMTEuNDU1LTkuMzE0LDIwLjc0Ni0yMC44MDEsMjAuNzQ2aC01Mi41NjVjLTExLjQ5MSwwLTIwLjgwMi05LjI5MS0yMC44MDItMjAuNzQ2ICAgIHYtMjc0Ljk3YzAtMTEuNDU5LDkuMzE1LTIwLjc0NywyMC44MDItMjAuNzQ3aDUyLjU2NWMxMS40OSwwLDIwLjgwMSw5LjI4NywyMC44MDEsMjAuNzQ3VjQyMi4wNjN6IE00NzQuNDM2LDQyMi4wNjMgICAgYzAsMTEuNDU1LTkuMzE0LDIwLjc0Ni0yMC44MDMsMjAuNzQ2aC01Mi41NjRjLTExLjQ5LDAtMjAuODAzLTkuMjkxLTIwLjgwMy0yMC43NDZ2LTI3NC45N2MwLTExLjQ1OSw5LjMxNi0yMC43NDcsMjAuODAzLTIwLjc0NyAgICBoNTIuNTY0YzExLjQ5LDAsMjAuODAzLDkuMjg3LDIwLjgwMywyMC43NDdWNDIyLjA2M3oiIGZpbGw9IiNjOWM5YzkiLz4KCQk8cGF0aCBkPSJNNTMyLjg4NywxNzQuODkxYzAsMC0xLjYwNSwwLTMuNTkyLDBzLTMuNTkyLDIuNzI3LTMuNTkyLDYuMDg2djIwNy4xOTljMCwzLjM2MSwxLjYwNSw2LjA4NiwzLjU5Miw2LjA4NmgzLjU5MiAgICBjMjAsMCwzNi4yNy0xNi4yMjcsMzYuMjctMzYuMTcyVjIxMS4wNjNDNTY5LjE2LDE5MS4xMTgsNTUyLjg4NywxNzQuODkxLDUzMi44ODcsMTc0Ljg5MXoiIGZpbGw9IiNjOWM5YzkiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
              </span>
              <span><p> `+info.level+`% /<p></span>`;
              target[i].innerHTML = battery100;
          }
          else if(info.level <= 50)
          {
              const battery50 = `
              <span class="batteryicon">
                   <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDU2OS4xNiA1NjkuMTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2OS4xNiA1NjkuMTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDcxLjEwOCw5Ni4zOTJIMzYuMjdjLTIwLDAtMzYuMjcsMTYuMjI3LTM2LjI3LDM2LjE3MnYzMDQuMDMzYzAsMTkuOTQ1LDE2LjI3LDM2LjE3MiwzNi4yNywzNi4xNzJoNDM0LjgzOCAgICBjMjAsMCwzNi4yNzEtMTYuMjI3LDM2LjI3MS0zNi4xNzJWMTMyLjU2NEM1MDcuMzgyLDExMi42MTksNDkxLjEwOCw5Ni4zOTIsNDcxLjEwOCw5Ni4zOTJ6IE0xMjYuOTExLDQyMi4wNjUgICAgYzAsMTEuNDU1LTkuMzE1LDIwLjc0Ni0yMC44MDIsMjAuNzQ2SDUzLjU0NGMtMTEuNDksMC0yMC44MDItOS4yOTEtMjAuODAyLTIwLjc0NnYtMjc0Ljk3YzAtMTEuNDU5LDkuMzE0LTIwLjc0NywyMC44MDItMjAuNzQ3ICAgIGg1Mi41NjRjMTEuNDkxLDAsMjAuODAyLDkuMjg3LDIwLjgwMiwyMC43NDdWNDIyLjA2NXogTTI0Mi43NTMsNDIyLjA2NWMwLDExLjQ1NS05LjMxNCwyMC43NDYtMjAuODAyLDIwLjc0NmgtNTIuNTY4ICAgIGMtMTEuNDksMC0yMC44MDItOS4yOTEtMjAuODAyLTIwLjc0NnYtMjc0Ljk3YzAtMTEuNDU5LDkuMzE0LTIwLjc0NywyMC44MDItMjAuNzQ3aDUyLjU2NGMxMS40OTEsMCwyMC44MDIsOS4yODcsMjAuODAyLDIwLjc0NyAgICB2Mjc0Ljk3SDI0Mi43NTN6IiBmaWxsPSIjYzljOWM5Ii8+CgkJPHBhdGggZD0iTTUzMi44OSwxNzQuODkzYzAsMC0xLjYwNiwwLTMuNTkyLDBjLTEuOTg2LDAtMy41OTMsMi43MjctMy41OTMsNi4wODZ2MjA3LjE5OWMwLDMuMzYxLDEuNjA2LDYuMDg2LDMuNTkzLDYuMDg2aDMuNTkyICAgIGMyMCwwLDM2LjI3MS0xNi4yMjcsMzYuMjcxLTM2LjE3MlYyMTEuMDY1QzU2OS4xNiwxOTEuMTIsNTUyLjg5LDE3NC44OTMsNTMyLjg5LDE3NC44OTN6IiBmaWxsPSIjYzljOWM5Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
              </span>
              <span><p> `+info.level+`% </p></span>`;
              target[i].innerHtml = battery50;
          }
          else if(info.level <= 10)
          {
              const battery10 = `
              <span class="batteryicon">
                   <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjI1NnB4IiB2aWV3Qm94PSIwIDAgNTY5LjE2IDU2OS4xNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTY5LjE2IDU2OS4xNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NzEuMTA4LDk2LjM5MkgzNi4yN2MtMjAsMC0zNi4yNywxNi4yMjctMzYuMjcsMzYuMTcydjMwNC4wMzNjMCwxOS45NDUsMTYuMjcsMzYuMTcyLDM2LjI3LDM2LjE3Mmg0MzQuODM4ICAgIGMyMCwwLDM2LjI3MS0xNi4yMjcsMzYuMjcxLTM2LjE3MlYxMzIuNTY0QzUwNy4zODIsMTEyLjYxOSw0OTEuMTA4LDk2LjM5Miw0NzEuMTA4LDk2LjM5MnogTTEyNi45MTEsNDIyLjA2NSAgICBjMCwxMS40NTUtOS4zMTUsMjAuNzQ2LTIwLjgwMiwyMC43NDZINTMuNTQ0Yy0xMS40OSwwLTIwLjgwMi05LjI5MS0yMC44MDItMjAuNzQ2di0yNzQuOTdjMC0xMS40NTksOS4zMTQtMjAuNzQ3LDIwLjgwMi0yMC43NDcgICAgaDUyLjU2NGMxMS40OTEsMCwyMC44MDIsOS4yODcsMjAuODAyLDIwLjc0N1Y0MjIuMDY1eiIgZmlsbD0iI2UwMjIyZSIvPgoJCTxwYXRoIGQ9Ik01MzIuODksMTc0Ljg5M2MwLDAtMS42MDYsMC0zLjU5MiwwYy0xLjk4NiwwLTMuNTkzLDIuNzI3LTMuNTkzLDYuMDg2djIwNy4xOTljMCwzLjM2MSwxLjYwNiw2LjA4NiwzLjU5Myw2LjA4NmgzLjU5MiAgICBjMjAsMCwzNi4yNzEtMTYuMjI3LDM2LjI3MS0zNi4xNzJWMjExLjA2NUM1NjkuMTYsMTkxLjEyLDU1Mi44OSwxNzQuODkzLDUzMi44OSwxNzQuODkzeiIgZmlsbD0iI2UwMjIyZSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />`+info.level+`%
              </span>
              <span><p> `+info.level+`% </p></span>`;
              target[i].innerHTML =battery10;
          }

        }

        else
        {
           const batteryNotFound = `
           <span class="batteryicon">
              <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDU2OS4xNiA1NjkuMTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2OS4xNiA1NjkuMTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDcxLjEwOCw5Ni4zOTJIMzYuMjdjLTIwLDAtMzYuMjcsMTYuMjI3LTM2LjI3LDM2LjE3MnYzMDQuMDMzYzAsMTkuOTQ1LDE2LjI3LDM2LjE3MiwzNi4yNywzNi4xNzJoNDM0LjgzOCAgICBjMjAsMCwzNi4yNzMtMTYuMjI3LDM2LjI3My0zNi4xNzJWMTMyLjU2NEM1MDcuMzgyLDExMi42MTksNDkxLjEwOCw5Ni4zOTIsNDcxLjEwOCw5Ni4zOTJ6IE0zNTMuOTI5LDM0MC45NjIgICAgYzUuMTUsNS4xNSw1LjE1LDEzLjQ5OCwwLDE4LjY0NWwtMjUuMjE0LDI1LjIxNWMtNS4xNSw1LjE1LTEzLjQ5OCw1LjE1LTE4LjY0NSwwbC01Ni4zODEtNTYuMzgxbC01Ni4zOCw1Ni4zODEgICAgYy01LjE1LDUuMTUtMTMuNDk4LDUuMTUtMTguNjQ1LDBsLTI1LjIxNC0yNS4yMTVjLTUuMTUtNS4xNS01LjE1LTEzLjQ5OCwwLTE4LjY0NWw1Ni4zODEtNTYuMzgxbC01Ni4zNzctNTYuMzggICAgYy01LjE1LTUuMTUtNS4xNS0xMy40OTgsMC0xOC42NDVsMjUuMjE0LTI1LjIxNGM1LjE1LTUuMTUsMTMuNDk4LTUuMTUsMTguNjQ1LDBsNTYuMzgsNTYuMzhsNTYuMzgxLTU2LjM4ICAgIGM1LjE0OS01LjE1LDEzLjQ5Ny01LjE1LDE4LjY0NSwwbDI1LjIxNCwyNS4yMTRjNS4xNSw1LjE1LDUuMTUsMTMuNDk4LDAsMTguNjQ1bC01Ni4zODMsNTYuMzhMMzUzLjkyOSwzNDAuOTYyeiIgZmlsbD0iI2M5YzljOSIvPgoJCTxwYXRoIGQ9Ik01MzIuODksMTc0Ljg5M2MwLDAtMS42MDksMC0zLjU5MiwwYy0xLjk4MywwLTMuNTkzLDIuNzI3LTMuNTkzLDYuMDg2djIwNy4yYzAsMy4zNjEsMS42MDYsNi4wODYsMy41OTMsNi4wODZoMy41OTIgICAgYzIwLDAsMzYuMjcxLTE2LjIyOSwzNi4yNzEtMzYuMTcyVjIxMS4wNjhDNTY5LjE2LDE5MS4xMjMsNTUyLjg5LDE3NC44OTMsNTMyLjg5LDE3NC44OTN6IiBmaWxsPSIjYzljOWM5Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
           </span> `;
           target[i].innerHTML = batteryNotFound;
        }

      }

      }

  },false);

}
