<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/default.css">
    <link rel="stylesheet" href="css/news-light.css">
    <title>Bolton University | News</title>
</head>

<body>
    <div class="massive-container" style="min-width: 325px;">
        <header id="header"></header>

        <main style="min-width: 325px;">
            <p id="home">News & Events</p>
            <div class="frame-1">
                <div class="background">
                    <h1>News & Events</h1>
                </div>
            </div>
            <div class="timeline">
                <?php
                include 'config.php';

                $sql = "SELECT * FROM event ORDER BY date DESC";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    $currentDate = date("Y-m-d");

                    while ($row = $result->fetch_assoc()) {
                        echo '<div class="card">';
                        echo '<h1>' . $row["name"] . '</h1>';
                        echo '<img src="' . $row["image"] . '" alt="' . $row["department"] . '" class="card-img">';
                        echo '<p> <b>Host:</b> ' . $row["presenter"] . '</p>';
                        echo '<p> <b>Avenue:</b> ' . $row["venue"] . '</p> <br>';
                        if ($row["date"] < $currentDate) {
                            echo '<p style="font-weight: bold; font-size: 18px; color: red;">Event Finished</p>';
                        } else {
                            echo '<p> <b>Date:</b> ' . $row["date"] . '</p>';
                        }
                        echo '<p> <b>Time:</b> ' . $row["time"] . '</p>';
                        echo '</div>';
                    }
                } else {
                    echo "0 results";
                }

                $conn->close();
                ?>
        </main>

        <footer id="footer"></footer>
    </div>


    <div class="popup">
        <button id="changeButton" class="cv">❂</button>
    </div>

    <!--  SCRIPT  -->
    <script src="js/conn-header.js"></script>
    <script src="js/header.js"></script>
    <script src="js/theme.js"></script>

</body>

</html>