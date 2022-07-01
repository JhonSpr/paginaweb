<?php
    
  error_reporting(0);

    
  $email = $_POST['email'];
  $usuario = $_POST['usuario'];
  $contraseÃ±a = $_POST['contraseña'];
  $conn = new mysqli('localhost','id19171005_jhon','jhonreyes2017HD@','id19171005_paginaweb');

  if($conn -> connect_errno)
  {
    echo "no hay conexion: (".$conn->connect_errno.")".$conn->connect_error;
  }
  
  if(isset($_POST['botonRegister']))
  {
    $pass_fuerte = password_hash($contraseña,PASSWORD_DEFAULT);
    $queryregistrar = "INSERT INTO usuarios(email,password,usuario) values ('$email','$pass_fuerte','$usuario')";
  
  if(mysqli_query($conn,$queryregistrar));
  {
    echo "<script> alert('El Usuario $usuario Se Ha Registro Correctamente'); window.location='index.html'</script>";
  }
 
  }



?>



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="stylesheet"  href="css/estiloRegister.css">
  <script src="https://kit.fontawesome.com/9d2ffd2695.js" crossorigin="anonymous"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animeku</title>
</head>
<body>
  
<div class="wrapper-general">
        <header>
            <nav class="menu">
                <div class="navbar-nav">
                    <div class="navigation">
                        <div class="nav-options">
                            <ul class="menu-navigation">
                                <li>
                                    <a href="index.php">INICIO</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav> 
        </header>

        <h1 style="color:#c47005;">Registrarse</h1>
    <span><a href="registrarse.php"></a></span>

    <form action="register.php" method="POST">
      <input name="usuario" type="text" placeholder="Usuario" class="inputUsuario" autofocus>
      <input name="email"type="email" aria-required="true" placeholder="Correo Electronico">
      <input name="contraseña" required type="password" aria-required="true" placeholder="Contraseña">
      <input name="confirmar_contraseña" required type="password" aria-required="true" placeholder="Confirma la Contraseña">
      <input type="submit" value="Registrate" name="botonRegister">
    </form>
</div>

</body>
</html>