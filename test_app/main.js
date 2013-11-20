window.onload = function() {
  document.getElementById("btn").onclick = function() {
    /*xwalk.experimental.dialog.showOpenDialog(true, true, "hello", null, "*.png", function(selection) {
      console.log(selection);
    });*/
    /*xwalk.runtime.getAPIVersion(function(md) {
      console.log(md);
    });*/
    try {
      var d = new Date().toString();
      echo.echo(d, function(msg) {
       document.write(msg + "<br>");
       var expected = d;
       if (msg === expected) {
         document.write("Async echo <font color=green>passed</font>.");
         document.title = "Pass";
       } else {
         document.write("Async echo <font color=red>failed</font>.");
         document.title = "Fail";
       }
      });
    } catch(e) {
      console.log(e);
      document.title = "Fail";
    }
  }
}
