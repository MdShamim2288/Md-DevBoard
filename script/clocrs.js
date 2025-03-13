document.getElementById('color-btn').addEventListener('click',
    function (event) {
        event.preventDefault();
        function color() {
            
            const g = Math.floor(200 + Math.random() * 56);
            const b = Math.floor(200 + Math.random() * 56);
            const r = Math.floor(200 + Math.random() * 56);
            return `rgb(${r}, ${g}, ${b})`;
        }

        document.body.style.backgroundColor = color();

    })