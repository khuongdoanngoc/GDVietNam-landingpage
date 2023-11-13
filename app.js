const radioButtons = document.getElementsByName("color");

radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", (e) => {
        const newColor = e.target.value;
        switch (newColor) {
            case "green": {
                // change main color
                document.documentElement.style.setProperty(
                    "--current-mode",
                    "rgb(0, 171, 85)"
                );
                // change img
                const earth = document.getElementById('earth')
                const block = document.getElementById('block')
                const sidebar = document.getElementById('sidebar')
                earth.src = './images/profile5_earth_green.png';
                block.src = './images/profile5_block_green.png';
                sidebar.src = './images/profile5_sidebar_green.png';
                break;
            }
            case "purple": {
                document.documentElement.style.setProperty(
                    "--current-mode",
                    "rgb(118, 53, 220)"
                );
                                const earth = document.getElementById('earth')
                const block = document.getElementById('block')
                const sidebar = document.getElementById('sidebar')
                earth.src = './images/profile5_earth_purple.png';
                block.src = './images/profile5_block_purple.png';
                sidebar.src = './images/profile5_sidebar_purple.png';
                break;
            }
            case "blue": {
                document.documentElement.style.setProperty(
                    "--current-mode",
                    "rgb(32, 101, 209)"
                );
                                const earth = document.getElementById('earth')
                const block = document.getElementById('block')
                const sidebar = document.getElementById('sidebar')
                earth.src = './images/profile5_earth_blue.png';
                block.src = './images/profile5_block_blue.png';
                sidebar.src = './images/profile5_sidebar_blue.png';
                break;
            }
            case "yellow": {
                document.documentElement.style.setProperty(
                    "--current-mode",
                    "rgb(253, 169, 45)"
                );
                                const earth = document.getElementById('earth')
                const block = document.getElementById('block')
                const sidebar = document.getElementById('sidebar')
                earth.src = './images/profile5_earth_yellow.png';
                block.src = './images/profile5_block_yellow.png';
                sidebar.src = './images/profile5_sidebar_yellow.png';
                break;
            }
            case "red": {
                document.documentElement.style.setProperty(
                    "--current-mode",
                    "rgb(255, 48, 48)"
                );
                                const earth = document.getElementById('earth')
                const block = document.getElementById('block')
                const sidebar = document.getElementById('sidebar')
                earth.src = './images/profile5_earth_red.png';
                block.src = './images/profile5_block_red.png';
                sidebar.src = './images/profile5_sidebar_red.png';
                break;
            }
            default: {
                document.documentElement.style.setProperty(
                    "--current-mode",
                    "rgb(0, 171, 85)"
                );
                                const earth = document.getElementById('earth')
                const block = document.getElementById('block')
                const sidebar = document.getElementById('sidebar')
                earth.src = './images/profile5_earth_green.png';
                block.src = './images/profile5_block_green.png';
                sidebar.src = './images/profile5_sidebar_green.png';
                break;
            }
        }
    });
});
