$(async function () {
  let users = await (await fetch("/api/users")).json();
  for(let user of users) {
    let html = $("#users-table").html();
    html += '<tr><th scope="row">' + user.id + '</th><td>'+ user.name + '</td><td>' + user.ammountTotal + '</td><td>' + user.ammountUnpayed +'</td><td><a class="btn btn-primary" href="/tasks.html#' + user.id + '">Ver tareas</a> | <a class="btn btn-success" href="#">Habilitar</a> | <a class="btn btn-danger" href="#">Deshabilitar</a></tr>';
    $("#users-table").html(html);
  }
});
