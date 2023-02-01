function getInputValue(){
    localStorage.clear();
    console.log(document.getElementById("fname").value);
    localStorage.setItem("fname",document.getElementById("fname").value);
    localStorage.setItem("lname",document.getElementById("lname").value);
    localStorage.setItem("username",document.getElementById("username").value);
    localStorage.setItem("inputDate",document.getElementById("inputDate").value);
    localStorage.setItem("colors",document.getElementById("colors").value);

    if(document.getElementById("cbNapi").checked)
    {
      localStorage.setItem("gtime",document.getElementById("cbNapi").value);
    } else if(document.getElementById("cbHeti").checked)
    {
      localStorage.setItem("gtime",document.getElementById("cbHeti").value);
    } else if(document.getElementById("cbHavi").checked)
    {
      localStorage.setItem("gtime",document.getElementById("cbHavi").value);
    }

    console.log("adatok mentve");
  }

  function colorData(){
    var ids = ['output_fname','output_lname','output_username','output_inputDate','output_gtime'];

    ids.forEach(id => {
      document.getElementById(id).style.color = localStorage.getItem("colors");
    });
  }

  function loadData(){
    document.getElementById("output_fname").innerHTML = localStorage.getItem("fname");
    document.getElementById("output_lname").innerHTML = localStorage.getItem("lname");
    document.getElementById("output_username").innerHTML = localStorage.getItem("username");
    document.getElementById("output_inputDate").innerHTML = localStorage.getItem("inputDate");
    document.getElementById("output_gtime").innerHTML = localStorage.getItem("gtime");
    colorData();
  }
  
  function validateForm() {
    let vnev = document.forms["names"]["fname"].value;
    let date = document.getElementById("inputDate").value;
    if (vnev == "") {
      document.getElementById("fname").style.borderColor = "red";
      alert("Töltsd ki a Vezetéknév mezőt!");
      return false;
    } else if (document.getElementById("inputDate").value == "") {
      document.getElementById("inputDate").style.borderColor = "red";
      alert("Töltsd ki a Születési dátum mezőt!");
      return false;
    }

  }
  function onSubmit(){
    getInputValue();
    validateForm();
  }

