<!DOCTYPE html>
<html>

<head>
    <title>Consulta</title>
    <link rel="stylesheet" href="estilos.css">
</head>

<body>

    <?php
    $servername = "localhost";
    $username = "root";
    $passworddb = "";
    $dbname = "cursosql";

    $conn = new mysqli($servername, $username, $passworddb, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = " SELECT nombre, primerapellido, segundoapellido FROM empleado ";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) { ?>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Primer apellido</th>
                <th>Segundo apellido</th>
            </tr>
            <?php while ($row = $result->fetch_assoc()) {
                echo "<tr>";

                echo "<td>" . $row['nombre'] . "</td>";

                echo "<td>" . $row['primerapellido'] . "</td>";

                echo "<td>" . $row['segundoapellido'] . "</td>";

                echo "</tr>";
            } ?>
        </table>
    <?php } else { ?>
        <div class="mensajeInformativo">No hay resultados para mostrar.
            <p> <a href="index.html">Ir a la página de registro</a></p>
        </div>
    <?php }
    ?>
</body>

</html>