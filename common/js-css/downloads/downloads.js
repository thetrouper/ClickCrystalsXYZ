<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Downloads Page</title>

        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />

        <title>ClickCrystals | Download</title>
        <meta
            name="description"
            content="Download ClickCrystals from any of our links &amp; get access to all of our modules and scripting! We have CurseForge, Modrinth, Github &amp; Planet MC!"
        />
        <meta property="og:title" content="Download ClickCrystlas" />
        <meta
            property="og:description"
            content="Download ClickCrystals from any of our links &amp; get access to all of our modules and scripting! We have CurseForge, Modrinth, Github &amp; Planet MC!"
        />
        <meta property="og:image" content="/clickscript/img/icon.png" />
        <link
            rel="shortcut icon"
            href="./common/assets/icon.png"
            type="image/x-icon"
        />
        <meta
            property="og:image"
            content="https://socialify.git.ci/ItziSpyder/ClickCrystals/png?description=1&amp;descriptionEditable=Your%20ultimate%20crystal%20PvP%20assistance%2C%20ClickCrystals%20at%20your%20service.&amp;font=Jost&amp;forks=1&amp;issues=1&amp;logo=https%3A%2F%2Fclickcrystals.xyz%2Fcommon%2Fassets%2Ficon.png&amp;name=1&amp;owner=1&amp;pattern=Solid&amp;pulls=1&amp;stargazers=1&amp;theme=Auto"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
    </head>
    <body data-bs-theme="dark">
        <div class="container py-5">
            <h1 class="mb-4">Downloads</h1>
            <p>
                Total: <span id="totalDls">fetching...</span><br />
                Modrinth: <span id="modrinthDls"><i>fetching...</i></span>
                <br />
                Curseforge: <span id="curseforgeDls"><i>fetching...</i></span>
                <br />
                GitHub: <span id="githubDls"><i>fetching...</i></span>
            </p>
            <div class="table-responsive">
                <table class="table table-dark table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Version</th>
                            <th>Source Code</th>
                            <th>v1.21</th>
                            <th>v1.20.6</th>
                            <th>v1.20.4</th>
                            <th>v1.20.2</th>
                            <th>v1.20</th>
                            <th>Downloads</th>
                        </tr>
                    </thead>
                    <tbody id="versions"></tbody>
                </table>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="common/js-css/downloads/downloads.js"></script>
        <script src="./common/js-css/page.js"></script>
    </body>
</html>
