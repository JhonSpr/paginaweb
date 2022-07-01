<?php
    error_reporting(0);
    $conn2 = new mysqli('localhost','id19171005_jhon','jhonreyes2017HD@','id19171005_paginaweb');

  if($conn2 -> connect_errno)
   {
     echo "no hay conexion: (".$conn2->connect_errno.")".$conn2->connect_error;
   }

  $usuario = $_POST['usuario'];
  $contraseña = $_POST['contraseña'];
  

  if(isset($_POST['botonLogin']))
  {
    $queryusuario = mysqli_query($conn2, "SELECT * FROM usuarios WHERE usuario  = '$usuario'");
    $nr  = mysqli_num_rows($queryusuario);
    $buscarContraseña = mysqli_fetch_array($queryusuario);


    if (($nr == 1) && (password_verify($contraseña,$buscarContraseña['password'])))
    {
      echo "<script>alert('Haz Iniciado Sesion Correctamente');window.location='index.html'</script>";
    }
    else
    {
      echo "<script>alert('Usuario o contraseña incorrectos');window.location='login.php'</script>";
    }
    }

?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Login</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/9d2ffd2695.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/estiloRegister.css">
  </head>
  <body style="background-color:#000;">
    
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

    

    <h1 style="color:#c47005; padding-top:100px;">Login</h1>
    <span><a href="login.php"></a></span>

    <form action="login.php" method="POST">
      <input name="usuario" type="text" placeholder="Usuario">
      <input name="contraseña" type="password" placeholder="Contraseña">
      <input type="submit" value="Iniciar Sesion" name="botonLogin">
    </form>
</div>
</body>
</html>