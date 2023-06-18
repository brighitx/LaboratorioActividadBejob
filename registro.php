<!DOCTYPE html>
<html>

<head>
    <title>Información</title>
    <link rel="stylesheet" href="estilos.css">
</head>

<body>
    <?php if ($_POST):
        $nombre = $_POST['nombre'];
        $primerapellido = $_POST['primerApellido'];
        $segundoapellido = $_POST['segundoApellido'];
        $email = $_POST['email'];
        $login = $_POST['login'];
        $password = $_POST['password'];
        if (strlen($nombre) > 0 && strlen($primerapellido) > 0 && strlen($segundoapellido) > 0 && strlen($email) > 0 && strlen($login) > 0 && strlen($password) > 0) {
            if (preg_match("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/", $email)) {
                if (preg_match("/^.{4,8}$/", $password)) {
                    $servername = "localhost";
                    $username = "root";
                    $passworddb = "";
                    $dbname = "cursosql";

                    $conn = new mysqli($servername, $username, $passworddb, $dbname);

                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }

                    $sql = " SELECT email FROM empleado WHERE email = '$email' ";
                    $result = $conn->query($sql);
                    if ($result->num_rows == 0) {
                        $sqlInsert = "INSERT INTO empleado (nombre, primerapellido, segundoapellido, email, login, password) VALUES ('$nombre', '$primerapellido', '$segundoapellido', '$email', '$login' ,'$password')";
                        if ($conn->query($sqlInsert) === TRUE) { ?>
                            <div class="mensajeInformativo">Registro completado con éxito.
                                <br>
                                <div class="contenedor-boton">
                                    <a href='consulta.php' class="btn-consulta">CONSULTA</a>
                                </div>
                            </div>
                        <?php } else {
                            "Error: " . $sqlInsert . "<br>" . $conn->error;
                        }
                    } else { ?>
                        <div class="mensajeInformativo">El email introducido ya existe, por favor, vuelva a la página de registro e indique
                            otro email.
                            <p> <a href="index.html">Ir a la página de registro</a></p>
                        </div>
                    <?php }

                    $conn->close();
                } else { ?>
                    <div class="mensajeInformativo">La contraseña introducida no es válida, por favor, vuelva a la página de registro.
                        <p> <a href="index.html">Ir a la página de registro</a></p>
                    </div>
                <?php }
            } else { ?>
                <div class="mensajeInformativo">El email introducido no es válido, por favor, vuelva a la página de registro.
                    <p> <a href="index.html">Ir a la página de registro</a></p>
                </div>
            <?php }
        } else { ?>
            <div class="mensajeInformativo">Faltan campos por introducir, por favor, vuelva a la página de registro.
                <p> <a href="index.html">Ir a la página de registro</a></p>
            </div>
        <?php }
        ?>
    <?php else: ?>
        <div class="mensajeInformativo">Ha ocurrido un error y no se ha realizado el registro</div>
    <?php endif; ?>
</body>

</html>