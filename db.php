<html>
<body>
<?php
$con = mysqli_connect("localhost", "root", "root1234", "data");
mysqli_select_db("test",$con);
$result = mysqli_query("select * from users", $con);
if (!$con) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

echo "Success: A proper connection to MySQL was made! The my_db database is great." . PHP_EOL;
echo "Host information: " . mysqli_get_host_info($link) . PHP_EOL;
echo "<table border='1' >
<tr>
<td align=center> <b>Roll No</b></td>
<td align=center><b>Name</b></td>";

while($data = mysqli_fetch_row($result))
{   
    echo "<tr>";
    echo "<td align=center>$data[0]</td>";
    echo "<td align=center>$data[1]</td>";
    echo "</tr>";
}
echo "</table>";
?>
</body>
</html>