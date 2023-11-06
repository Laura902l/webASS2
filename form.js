<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="">
  <link rel="icon" href="C:\Users\hanal\.vscode\web_tech11\bakery_img\favicon.ico">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>

  <!-- font -->
  <link href='//fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,400,600,700' rel='stylesheet'
    type='text/css'>
  <link href="https://fonts.googleapis.com/css?family=Marck+Script" rel="stylesheet">
  <title>Form</title>



</head>

<body class="bg-image"
  style="background-image: url(https://img.freepik.com/premium-vector/hand-drawn-cupcake-doodle-background-seamless-pattern_217204-180.jpg?w=2000);">

  <!-- Our icon -->
  <div style="background-color: #F7F4ED;">
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center ">
        <div class="col-sm-6">
          <a href="index.html"><img src="photo/Our icon.png" alt="" width="90%"></a>
        </div>
      </div>
    </div>
  </div>
  <!-- form -->
  <div class="container border mt-5 " style="background-color: #F7F4ED; width:50%">
    <div>
      <form action="admin.html" onsubmit="validateForm(this.email.value, this.pwd.value); return false;">
        <h2 class="mt-2 text-center">Sign in</h2>
        <div class="form-group mt-4">
          <div class="input-group">

            <div class="container-fluid">

              <p class="mt-4 ml-4 text-end">Don't have an account? <a href="sign_up.html">Sign up</a> here</p>

            </div>

            <input type="email" class="form-control text-center" id="email" placeholder="Enter email" name="email">
          </div>

        </div>
        <div class="mb-3">
          <div class="mt-4 text-end" type="button" id="pass"
            onclick="togglePasswordVisibility(document.getElementById('pwd'))">Hide Password</div>
        </div>
        <div class="form-group mt-4">
          <div class="input-group">
            <input type="password" class="form-control text-center" id="pwd" placeholder="Enter password" name="pwd">
            <div class="input-group-append mt-5">
            </div>
          </div>
        </div>
    </div>
    <div class="text-center"><button class="btn btn-dark mt-2">Submit</button></div>
    <ul class="pager">
      <li class="text-center"><a href="index.html">Home</a></li>
    </ul>
    </form>

  </div>

  </div>

  <script src="form.js"></script>
</body>

</html>
