$(async function () {
  let userid = Number(window.location.toString().split("#")[1]);
  let tasks;
  if(!isNaN(userid)){
    tasks = await (await fetch("/api/user/" + userid.toString() + "/tasks")).json();
  } else {
    tasks = await (await fetch("/api/tasks")).json();
  }


  console.log(tasks);
  for(let task of tasks) {
    let html = $("#tasks-table").html();
    html += '<tr><th scope="row">' + task.id + '</th><td>'+ task.user.name + '</td><td>' + task.duration/1000 + 's</td><td>' + task.avg_power +'%</td><td>' + task.cost +'</td><td>' + (task.payed?"Sí":"No") +'</td><td>' + task.timestamp +'</td></tr>';
    $("#tasks-table").html(html);
  }
})
