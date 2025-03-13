let allsBtn = document.querySelectorAll('.btn')
console.log('.btn');

for (let i = 0; i < allsBtn.length; i++) {
    const btn = allsBtn[i]
    btn.addEventListener('click',
        function (event) {
            let parent = event.target.parentElement.parentElement.parentElement;
            console.log(parent);

            // let title = parent.querySelector("h2").innerText;
            // let company = parent.querySelector("span").innerText;
            // let task = parent.querySelector("p").innerText;
            // let time = getCurrentTime();

            let assigned = document.getElementById('task-Assigned').innerText;
            taskAssigned = parseInt(assigned);
            taskAssigned -= 1;
            document.getElementById('task-Assigned').innerText = taskAssigned;

            let completedTask = document.getElementById("complet").innerText;
            completedTask = parseInt(completedTask);
            completedTask += 1;
            document.getElementById("complet").innerText = completedTask;

            alert(`
                Board Updated Successfully
                `);

            if (taskAssigned == 0) {
                alert(`
                      ongrates!!! You Have completed All The current Task
                      `);
            }


        })
}
