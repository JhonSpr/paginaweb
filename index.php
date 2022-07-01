<?php
  session_start();

  require 'db.php';

  if (isset($_SESSION['user_id'])) {
    $records = $conn->prepare('SELECT id, email, password FROM usuarios WHERE id = :id');
    $records->bindParam(':id', $_SESSION['user_id']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    $user = null;

    if (count($results) > 0) {
      $user = $results;
    }
  }
?>



<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="css/fontawesome.css">
    <script src="js/main.js"></script>
    <script src="https://kit.fontawesome.com/9d2ffd2695.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/estilophp.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animeku</title>
</head>
<body>
    <div class="wrapper-general">
        <header>
            <nav class="menu menu-responsive">  
                <nav class="menu-responsive2">
                <ul class="menu_items">
                    <li>
                        <a href="">INICIO</a>
                    </li>
                    <li>
                        <a href="">ANIMES</a>
                    </li>
                    <li>
                        <a href="register.php">REGISTRARSE</a>
                    </li>
                    <li>
                        <a href="login.php">LOGIN</a>
                    </li>
                </ul>   
                </nav>
                
                
                
                <div class="navbar-nav">            
                    <div class="logo">
                            <img src="Mi proyecto.png" alt="logo">
                    </div>
                    <div class="navigation">  
                        <div class="nav-options">       
                            <ul class="menu-navigation">
                                <li class="obj">
                                    <a href="" class="bordes menu-responsive">INICIO</a>
                                </li>
                                <li class="obj">
                                    <a href="" class="bordes menu-responsive">ANIMES</a>
                                </li>      
                            </ul>
                            <div class="search">
                                <form action="" method="get">
                                    <input type="text" name="q" id="" placeholder="Buscar">
                                    <button>
                                        <i class="fas fa-search"></i>

                                    </button>
                                </form>
                            </div>
                            <div class="login-button">
                                <li>
                                <a href="login.php" style="color:#000;" class="menu-responsive">
                                    <input type="checkbox" name="" id="open-login">
                                    <label for="dpwn-login" class="buttonOpen-login">
                                    <span class="fa-user">Login</span>
                                    </label>
                                </a>
                                </li>
                            </div>
                            <div class="login-button">
                                <li>
                                    <a href="register.php" style="color:#000;" class="menu-responsive">
                                        <input type="checkbox" name="" id="open-login">
                                        <label for="dpwn-login" class="buttonOpen-login">
                                        <span>Registrarse</span>
                                        </label>
                                    </a>
                                </li>
                                </a>

                            </div>
                            <span class="btn_menu">
                                <i class="fa fa-bars"></i>
                            </span>
                        </div>
                    </div>

                </div>
                
                
            </nav>
        </header>

        <section class="container-principal">
            <div class="container-body margin-container">
                <aside class="sidebar MC__fixed">
                <div class="widget-emision">
                        <div class="title-emision fa-play">
                            <strong>ANIMES FINALIZADOS</strong>
                        </div>
                        <div class="animes-emision">
                            <ul>
                                <li>
                                    <a href="#"  class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">Naruto Shippuden
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">Dororo
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">Burn the Witch
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">Boogiepop wa Warawanai 
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">Egao no Daika
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">BAKI: dai reitaisai-hen
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">Mob Psycho 100 
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">Mob Psycho 100 II
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">Watashi ni Tenshi ga Maiorita!
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">Yakusoku no Neverland
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">Girly Air Force
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">Mahou Shoujo Tokushusen Asuka
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">Doukyonin wa Hiza, Tokidoki, Atama no Ue.
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">Violet Evergarden
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">Doukyonin wa Hiza, Tokidoki, Atama no Ue.
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">Doukyonin wa Hiza, Tokidoki, Atama no Ue.
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">Doukyonin wa Hiza, Tokidoki, Atama no Ue.
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="fa-play-circle" onclick="alert('Debes Iniciar Sesion')">Doukyonin wa Hiza, Tokidoki, Atama no Ue.
                                        <span class="type-anime tv">ANIME</span>
                                    </a>
                                </li>
                                





                                
                            </ul>
                        </div>
                     </div>
                </aside>
                <main>
                    <div class="title">
                        <h2>ANIMES EN EMISION</h2>
                        <div class="order">
                        <a href="#" class="active">EN EMISION</a>
                    </div>
                    </div>
                    <ul class="lastEpisodios">
                        <li>
                        <a href="" class="fa-play" onclick="alert('Debes Iniciar Sesion')">
                            <span class="imagen-mask">
                                <img src="imagenes/spy x family.jpg" alt="miniatura">
                            </span>
                            <span class="nCapi">Emision</span>
                            <strong class="title-cap-miniatura">Spy x Family</strong>
                        </a>
                        </li>
                        <li>
                            <a href="" class="fa-play" onclick="alert('Debes Iniciar Sesion')">
                                <span class="imagen-mask">
                                    <img src="imagenes/promise.jpg" alt="miniatura">
                                </span>
                                <span class="nCapi">Emision</span>
                                <strong class="title-cap-miniatura">Yakusoku no Neverland 2nd Season</strong>
                            </a>
                            </li>
                            <li>
                                <a href="" class="fa-play" onclick="alert('Debes Iniciar Sesion')">
                                    <span class="imagen-mask">
                                        <img src="imagenes/kingdom 4th.jpg" alt="miniatura">
                                    </span>
                                    <span class="nCapi">Emision</span>
                                    <strong class="title-cap-miniatura">Kingdom 4th Season</strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="fa-play" onclick="alert('Debes Iniciar Sesion')">
                                    <span class="imagen-mask">
                                        <img src="imagenes/ao Ashi.jpg" alt="miniatura">
                                    </span>
                                    <span class="nCapi">Emision</span>
                                    <strong class="title-cap-miniatura">Ao Ashi</strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="fa-play" onclick="alert('Debes Iniciar Sesion')">
                                    <span class="imagen-mask">
                                        <img src="imagenes/kunoichi.jpg" alt="miniatura">
                                    </span>
                                    <span class="nCapi">Emision</span>
                                    <strong class="title-cap-miniatura">Kunoichi Tsubaki no Mune no Uchi</strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="fa-play" onclick="alert('Debes Iniciar Sesion')">
                                    <span class="imagen-mask">
                                        <img src="imagenes/jantama.jpg" alt="miniatura">
                                    </span>
                                    <span class="nCapi">Emision</span>
                                    <strong class="title-cap-miniatura">Jantama Pong☆</strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="fa-play" onclick="alert('Debes Iniciar Sesion')">
                                    <span class="imagen-mask">
                                        <img src="imagenes/gaikotsu kishi.jpg" alt="miniatura">
                                    </span>
                                    <span class="nCapi">Emision</span>
                                    <strong class="title-cap-miniatura">Gaikotsu Kishi-sama, Tadaima Isekai e Odekakechuu</strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="fa-play" onclick="alert('Debes Iniciar Sesion')">
                                    <span class="imagen-mask">
                                        <img src="imagenes/date A live IV.jpg" alt="miniatura">
                                    </span>
                                    <span class="nCapi">Emision</span>
                                    <strong class="title-cap-miniatura">Date A Live IV</strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="fa-play" onclick="alert('Debes Iniciar Sesion')">
                                    <span class="imagen-mask">
                                        <img src="imagenes/ao Ashi.jpg" alt="miniatura">
                                    </span>
                                    <span class="nCapi">Emision</span>
                                    <strong class="title-cap-miniatura"></strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="fa-play" onclick="alert('Debes Iniciar Sesion')">
                                    <span class="imagen-mask">
                                        <img src="imagenes/ao Ashi.jpg" alt="miniatura">
                                    </span>
                                    <span class="nCapi">Emision</span>
                                    <strong class="title-cap-miniatura"></strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="fa-play" onclick="alert('Debes Iniciar Sesion')">
                                    <span class="imagen-mask">
                                        <img src="imagenes/ao Ashi.jpg" alt="miniatura">
                                    </span>
                                    <span class="nCapi">Emision</span>
                                    <strong class="title-cap-miniatura"></strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="fa-play" onclick="alert('Debes Iniciar Sesion')">
                                    <span class="imagen-mask">
                                        <img src="imagenes/ao Ashi.jpg" alt="miniatura">
                                    </span>
                                    <span class="nCapi">Emision</span>
                                    <strong class="title-cap-miniatura"></strong>
                                </a>
                            </li>
                            <li>
                                <a href="" class="fa-play" onclick="alert('Debes Iniciar Sesion')">
                                    <span class="imagen-mask">
                                        <img src="imagenes/ao Ashi.jpg" alt="miniatura">
                                    </span>
                                    <span class="nCapi">Emision</span>
                                    <strong class="title-cap-miniatura"></strong>
                                </a>
                            </li>
                            

                    </ul>
                    
                </main>
            </div>
        </section>
        <footer>

        </footer>
    </div>
    
</body>
</html>